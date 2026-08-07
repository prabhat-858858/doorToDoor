export const PHONE_NUMBER = "+91 9006867370";
export const WHATSAPP_RAW_NUMBER = "919006867370";
export const EMAIL_ADDRESS = "doorstodoors4@gmail.com";

export const PRESET_MESSAGES = {
  market: "Hello doorsToDoors, I need help getting something from the market.",
  delivery: "Hello doorsToDoors, I need a pickup and delivery service.",
  ride: "Hello doorsToDoors, I need a local ride.",
  general: "Hello doorsToDoors, I would like to know more about your services.",
  directHelp: "Hello doorsToDoors, I need some help.",
};

export function getWhatsAppUrl(text = PRESET_MESSAGES.general) {
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function formatRequestMessage(formData) {
  const {
    name,
    phone,
    service,
    pickup,
    destination,
    details,
    date,
    time,
    notes,
  } = formData;

  const lines = [
    `👋 *New Service Request - doorsToDoors*`,
    `--------------------------------------`,
    `👤 *Name:* ${name.trim()}`,
    `📞 *Phone:* ${phone.trim()}`,
    `📦 *Service:* ${service || "General Help"}`,
  ];

  if (pickup && pickup.trim()) {
    lines.push(`📍 *Pickup Location:* ${pickup.trim()}`);
  }
  if (destination && destination.trim()) {
    lines.push(`🏁 *Destination / Delivery:* ${destination.trim()}`);
  }
  if (details && details.trim()) {
    lines.push(`📝 *What I Need:* ${details.trim()}`);
  }
  if (date && date.trim()) {
    lines.push(`📅 *Preferred Date:* ${date.trim()}`);
  }
  if (time && time.trim()) {
    lines.push(`⏰ *Preferred Time:* ${time.trim()}`);
  }
  if (notes && notes.trim()) {
    lines.push(`💬 *Additional Notes:* ${notes.trim()}`);
  }

  lines.push(`--------------------------------------`);
  lines.push(`Sent via doorsToDoors Website`);

  return lines.join("\n");
}
