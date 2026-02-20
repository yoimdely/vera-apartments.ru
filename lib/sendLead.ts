
type LeadData = {
  name: string;
  phone: string;
  contactMethod: string;
  page_url?: string;
  utm_source?: string;
  [key: string]: any;
};

export async function sendLead(data: LeadData) {
  try {
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server responded with error:", response.status, errorText);
      alert(`Ошибка отправки: ${response.status} ${response.statusText}\n${errorText.substring(0, 100)}`);
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error("Failed to send lead:", error);
    alert(`Не удалось отправить заявку:\n${error.message}`);
    throw error;
  }
}


