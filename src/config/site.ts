// Swap these placeholder values for your bakery's real contact details.
export const siteConfig = {
  name: "Jenny's Cake",
  whatsappNumber: "2347084360923", // international format, no + or spaces
  whatsappMessage:
    "Hi Jenny! I'd like to ask about ordering a cake.",
  email: "jennyscake@gmail.com",
  emailSubject: "Cake Inquiry",
  emailBody: "Hi Jenny,\n\nI'd like to ask about ordering a cake for...",
  tiktokHandle: "@jenniclems",
  tiktokUrl: "https://www.tiktok.com/@jenniclems",
};

export const links = {
  whatsapp: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`,
  email: `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    siteConfig.emailSubject
  )}&body=${encodeURIComponent(siteConfig.emailBody)}`,
  tiktok: siteConfig.tiktokUrl,
};
