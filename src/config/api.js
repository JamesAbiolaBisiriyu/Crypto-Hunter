const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3/coins/';

export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `${COINGECKO_BASE_URL}${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `${COINGECKO_BASE_URL}${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;


