export function generateReferenceCode() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array(8)
    .fill()
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");
}
