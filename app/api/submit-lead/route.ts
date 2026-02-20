import { NextRequest, NextResponse } from 'next/server';

type LeadData = {
  name?: string;
  phone?: string;
  contactMethod?: string;
  page_url?: string;
  utm_source?: string;
  [key: string]: any;
};

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: NextRequest) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return OPTIONS();
  }

  try {
    const data: LeadData = await request.json();

    const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // If no integrations configured, return success to avoid exposing missing config
    if (!WEBHOOK_URL && (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID)) {
      return NextResponse.json(
        { success: true, message: 'Mock lead sent (no env vars)' },
        { status: 200 }
      );
    }

    const promises: Promise<any>[] = [];

    // Send to webhook if configured
    if (WEBHOOK_URL) {
      promises.push(
        fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }).then((res) => {
          if (!res.ok) throw new Error('Webhook failed');
          return res;
        })
      );
    }

    // Send to Telegram if configured
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const cleanChatId = TELEGRAM_CHAT_ID.replace(/['"]/g, '').trim();

      const message = `
<b>Новая заявка с сайта!</b>
<b>Имя:</b> ${data.name || 'N/A'}
<b>Телефон:</b> ${data.phone || 'N/A'}
<b>Форма:</b> ${data.contactMethod || 'N/A'}
<b>URL:</b> ${data.page_url || 'N/A'}
<b>UTM Source:</b> ${data.utm_source || 'N/A'}
${Object.entries(data)
  .filter(
    ([key]) =>
      ![
        'name',
        'phone',
        'contactMethod',
        'page_url',
        'utm_source',
      ].includes(key)
  )
  .map(([key, value]) => `<b>${key}:</b> ${value}`)
  .join('\n')}
      `;

      promises.push(
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: cleanChatId,
            text: message,
            parse_mode: 'HTML',
          }),
        }).then(async (res) => {
          if (!res.ok) {
            const errorText = await res.text();
            throw new Error(
              `Telegram error: ${res.status}. Used ChatID: "${cleanChatId}". Response: ${errorText}`
            );
          }
          return res;
        })
      );
    }

    await Promise.all(promises);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error('Lead submission error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
