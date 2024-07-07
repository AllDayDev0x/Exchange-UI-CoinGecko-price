import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.svg';

export default function Navigation() {
  return (
    <div className="flex justify-around p-5 items-center mx-10">
      <Image src={Logo} alt="logo" />
      <div className="hidden md:flex gap-16">
        <Link href={'#'}> Exchange</Link>
        <Link href={'#'}> Last Transactions</Link>
        <Link href={'#'}> Invite Friend</Link>
        <Link href={'#'}> Notifications</Link>
      </div>
      <div className="hidden md:flex gap-5">
        <Link
          href={'#'}
          className="btn border hover:border-none hover:bg-violet-600  border-violet-600 rounded-tl-md rounded-br-md p-3 py-2">
          {' '}
          LOGIN{' '}
        </Link>
        <Link
          href={'#'}
          className="btn bg-violet-600 hover:bg-none hover:border-violet-60  rounded-tl-md rounded-br-md p-3 py-2">
          {' '}
          SIGN UP{' '}
        </Link>
      </div>
    </div>
  );
}
