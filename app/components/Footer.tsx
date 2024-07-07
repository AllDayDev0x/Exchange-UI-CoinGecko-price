import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex justify-center m-10 gap-2">
      <p>@ {process.env.NEXT_PUBLIC_COPYRIGHT} </p>
      <p> Author: {process.env.NEXT_PUBLIC_AUTHOR} </p>
      <p>
        Email:{' '}
        <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-blue-400">
          {process.env.NEXT_PUBLIC_EMAIL}
        </Link>{' '}
      </p>
    </div>
  );
}
