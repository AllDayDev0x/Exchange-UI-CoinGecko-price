import { useQuery } from '@tanstack/react-query';

import { Token, ExchangePrice } from '../types/type';

const fetchTokenPrice = async (sellToken?: Token, buyToken?: Token): Promise<ExchangePrice> => {
  if (!sellToken || !buyToken) {
    return {
      sellToken: 0,
      buyToken: 0,
      exchangeRate: 1,
    };
  }
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_COIN_GECKO_URL!}?` +
      new URLSearchParams({ ids: `${sellToken.tokenId},${buyToken.tokenId}`, vs_currencies: 'usd' }),
  )
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e.message);
    });

  return {
    sellToken: Number(data[sellToken.tokenId].usd),
    buyToken: Number(data[buyToken.tokenId].usd),
    exchangeRate: Number(data[sellToken.tokenId].usd) / Number(data[buyToken.tokenId].usd),
  };
};

export const useTokenPrice = (sellToken?: Token, buyToken?: Token) =>
  useQuery({
    queryKey: ['tokenPrice', sellToken, buyToken],
    queryFn: () => fetchTokenPrice(sellToken, buyToken),
    refetchInterval: 20000,
  });
