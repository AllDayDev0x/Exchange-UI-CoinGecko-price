export type Token = {
  tokenId: string;
  tokenSymbol: string;
};

export type TokenPriceData = {
  price: number;
  tokenId: string;
  tokenSymbol: string;
  tokenPrice: number;
  dailyChange: number;
};

export type ExchangePrice = {
  sellToken: number; // price in usd
  buyToken: number; // price in usd
  exchangeRate: number;
};
