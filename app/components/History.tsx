import Image from 'next/image';

export default function Hisotry() {
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
            <tr>
              <td className="flex items-center gap-4 py-2">
                <Image src={'/assets/bitcoin.png'} width={64} height={64} alt="token_id" />
                BTC/USD
              </td>
              <td> $63,000.00 </td>
              <td> 0.33% </td>
              <td> $63,000.00 </td>
              <td className="text-right">
                <button className=" bg-green-300 text-cyan-950 p-2"> Trade </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
