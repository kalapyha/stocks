export const getMetalDataString = (metal, { unit, price, change }) => {
  return `${metal} per 1 ${unit}: ${price} $(USD) | Change: ${change} $`;
};