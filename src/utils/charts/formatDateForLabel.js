const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export default function formatDateForLabel(paymentDate) {
  const date = new Date(paymentDate);
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
