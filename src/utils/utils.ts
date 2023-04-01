const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

const AUTHORIZATION_TOKEN_KEY = "authorization_token";
export const getAuthorizationToken = () =>
  localStorage.getItem(AUTHORIZATION_TOKEN_KEY);
