import { supabase } from '@/app/libs/supabase';
import { NextResponse } from 'next/server';

export async function POST() {
  const { data, error } = await supabase.from('history').select('token_id, token_symbol, price, daily_change');
  console.log(data, 'data');
  if (error) {
    return NextResponse.json({ message: 'error in database connection' }, { status: 500 });
  }
  return NextResponse.json({
    data: data.map((token) => ({
      tokenId: token.token_id,
      tokenSymbol: token.token_symbol,
      price: token.price,
      dailyChange: token.daily_change,
    })),
  });
}
