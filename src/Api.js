const url = "https://api.coincap.io/v2";

export const getAssets = async (number) => {
  const response = await fetch(`${url}/assets?limit=${number}`);
  const responseJSON = await response.json();
  const data = await responseJSON.data;
  return data;
};

export const getAsset = async (coin) => {
  const response = await fetch(`${url}/assets/${coin}`);
  const responseJSON = await response.json();
  const data = await responseJSON.data;
  return data;
};

export const getAssetHistory = async (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const response = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const responseJSON = await response.json();
  const data = await responseJSON.data;
  return data;
};

export const getMarkets = async (coin) => {
  const response = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  const responseJSON = await response.json();
  const data = await responseJSON.data;
  return data;
};

export const getExchange = async (id) => {
  const response = await fetch(`${url}/exchanges/${id}`);
  const responseJSON = await response.json();
  const data = await responseJSON.data;
  return data;
};
