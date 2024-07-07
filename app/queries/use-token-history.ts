import { useQuery } from '@tanstack/react-query';
import { supabase } from '../libs/supabase';
import { Token, TokenPriceData } from '../types/type';

const fetchTokenHistory = async () => {
  const data = await fetch('/api/getTokenHistory', {
    method: 'POST',
  })
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e.message);
    });

  return data.data as TokenPriceData[];
};

export const useTokenHistoryData = () => useQuery({ queryKey: ['history'], queryFn: fetchTokenHistory });
