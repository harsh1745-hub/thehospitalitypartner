export const openWhatsApp = (message) => {
  const phoneNumber = "918299528655";

  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
};