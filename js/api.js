const API = "https://api.coingecko.com/api/v3";

export const fetchCoin = async (c) => {
  const r = await fetch(`${API}/coins/${c}`);
  if (!r.ok) throw "error";
  return r.json();
};

export const fetchHistory = async (c) => {
  const r = await fetch(
    `${API}/coins/${c}/market_chart?vs_currency=usd&days=7`
  );
  return r.json();
};

export const fetchTopMovers = async () => {
  const r = await fetch(
    `${API}/coins/markets?vs_currency=usd&per_page=20&page=1&price_change_percentage=24h`
  );
  return r.json();
};
