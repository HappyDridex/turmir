const sum = new Intl.NumberFormat("ru", {
  maximumFractionDigits: 0,
});

const formatSum = (value: number) => {
  return sum.format(value);
};

export { formatSum };
