'use client';

import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Token } from '../types/type';
import Image from 'next/image';

export default function TokenModal({
  open,
  setOpen,
  onChange,
  tokens,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
  onChange: (token: Token) => void;
  tokens: Token[];
}) {
  const [searchVal, setSearchVal] = useState('');
  const filteredTokenList = useMemo(() => {
    return tokens.filter(
      (token) =>
        token.tokenId.toLowerCase().includes(searchVal.toLowerCase()) ||
        token.tokenSymbol.toLowerCase().includes(searchVal.toLowerCase()),
    );
  }, [searchVal, tokens]);
  useEffect(() => {
    if (open) setSearchVal('');
  }, [open]);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0  w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative flex flex-col transform overflow-hidden rounded-lg bg-black border h-[700px] max-h-[90vh] bg-opacity-90 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
            <div className="flex-1 overflow-hidden flex flex-col mt-3 px-4 mx-3 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="text-centers sm:text-left">
                <DialogTitle as="h3" className="text-white font-semibold leading-6 text-2xl">
                  Select Token
                </DialogTitle>
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="text-2xl border rounded-md w-full bg-black text-white mt-5 p-2"
                />
              </div>
              <div className="mt-2 flex-1 overflow-auto scroll-mx-20">
                {filteredTokenList.map((token) => (
                  <div
                    className="flex gap-5 items-center bg-slate-800 p-5 rounded-2xl my-2 cursor-pointer hover:bg-opacity-50"
                    onClick={() => {
                      onChange(token);
                      setOpen(false);
                    }}>
                    <Image
                      src={`/assets/${token.tokenId}.png`}
                      className="rounded-md"
                      width={34}
                      height={34}
                      alt={token.tokenId}
                    />
                    <p className="text-2xl">{token.tokenSymbol}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                Deactivate
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
