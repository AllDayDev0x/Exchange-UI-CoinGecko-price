'use client';
import Image from 'next/image';
import { useTokenHistoryData } from '../queries/use-token-history';

export default function Hisotry() {
  const { data, error, isLoading } = useTokenHistoryData();

  return (
    <div className="p-5 flex justify-center mt-10">
      <div className="border-2 bg-[#000000CC] rounded-xl border-gray-500  w-full max-w-[1180px] p-10">
        <table className="p-3 w-full">
          <thead>
            <tr className="border-b-2 border-gray-500">
              <td>ASSETS</td>
              <td>LAST TRADE</td>
              <td>24H %</td>
              <td>24H CHANGE</td>
              <td className="text-blue-500 text-right">{'MORE >'}</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((token) => (
              <tr>
                <td className="flex items-center gap-4 py-2 uppercase">
                  <Image src={`/assets/${token.tokenId}.png`} width={64} height={64} alt="token_id" />
                  {token.tokenId}/USD
                </td>
                <td> ${token.price} </td>
                <td
                  className={
                    token.dailyChange > 0
                      ? 'text-green-400'
                      : token.dailyChange === 0
                      ? 'text-gray-600'
                      : 'text-red-600'
                  }>
                  {token.dailyChange >= 0 ? '+' : ''}
                  {((token.dailyChange / token.price) * 100).toFixed(2)}%{' '}
                </td>
                <td
                  className={
                    token.dailyChange > 0
                      ? 'text-green-400'
                      : token.dailyChange === 0
                      ? 'text-gray-600'
                      : 'text-red-600'
                  }>
                  {token.dailyChange >= 0 ? '+' : ''}
                  {token.dailyChange.toFixed(2)}{' '}
                </td>
                <td className="text-right">
                  <button className=" bg-green-300 text-cyan-950 p-2"> Trade </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
