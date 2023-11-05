export function formatNumberToCurrency(price: number) {
  const priceFormated = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return priceFormated;
}
