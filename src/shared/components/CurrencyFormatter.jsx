const CurrencyFormatter = ({ value, locale = "pt-BR", currency = "BRL" }) => {
  const formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

export default CurrencyFormatter