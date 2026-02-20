
export async function onRequest(context) {
  const { request, env } = context;
  
  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  // Only allow POST for logic
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: `Method ${request.method} not allowed. Use POST.` }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const data = await request.json();
    const WEBHOOK_URL = env.LEAD_WEBHOOK_URL;
    const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID;

    // ... (rest of logic) ...

    if (!WEBHOOK_URL && (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID)) {
       // ...
       return new Response(JSON.stringify({ success: true, message: "Mock lead sent (no env vars)" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    
    const promises = [];

    if (WEBHOOK_URL) {
      promises.push(
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).then(res => {
          if (!res.ok) throw new Error("Webhook failed");
          return res;
        })
      );
    }

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      // Clean chat ID (remove quotes if user added them by mistake)
      const cleanChatId = TELEGRAM_CHAT_ID.replace(/['"]/g, '').trim();
      
      const message = `
<b>Новая заявка с сайта!</b>
<b>Имя:</b> ${data.name || 'N/A'}
<b>Телефон:</b> ${data.phone || 'N/A'}
<b>Форма:</b> ${data.contactMethod || 'N/A'}
<b>URL:</b> ${data.page_url || 'N/A'}
<b>UTM Source:</b> ${data.utm_source || 'N/A'}
${Object.entries(data)
  .filter(([key]) => !['name', 'phone', 'contactMethod', 'page_url', 'utm_source'].includes(key))
  .map(([key, value]) => `<b>${key}:</b> ${value}`)
  .join('\n')}
      `;

      promises.push(
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: cleanChatId,
            text: message,
            parse_mode: "HTML",
          }),
        }).then(async res => {
          if (!res.ok) {
            const errorText = await res.text();
            // Include the used Chat ID in the error for debugging
            throw new Error(`Telegram error: ${res.status}. Used ChatID: "${cleanChatId}". Response: ${errorText}`);
          }
          return res;
        })
      );
    }

    await Promise.all(promises);

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
