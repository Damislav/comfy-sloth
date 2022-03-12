export const formatPrice = (num) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
