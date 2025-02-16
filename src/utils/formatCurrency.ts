export const formatCurrency = (amount: number): string => {
  const roundedAmount = Math.round(amount); // Round the amount
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(roundedAmount);
};
