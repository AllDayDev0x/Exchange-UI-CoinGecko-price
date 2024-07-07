export type Token = {
  tokenId: string;
  tokenSymbol: string;
};

export type TokenPriceData = {
  tokenId: string;
  tokenSymbol: string;
  tokenPrice: Number;
  dailyChange: Number;
};

export type ExchangePrice = {
  sellToken: number; // price in usd
  buyToken: number; // price in usd
  exchangeRate: number;
};
