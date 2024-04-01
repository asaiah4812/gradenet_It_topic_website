import Image from 'next/image'
import logo from '/public/logo.svg'
import Link from 'next/link'
import { LibraryBig } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between border px-2">
      <Link href="/" className="flex items-center font-bold text-2xl">
        <Image src={logo} width={80} height={80} alt="Logo" />
        IT topic
      </Link>
      <div className="bg-slate-200 p-2 rounded-full hover:shadow-lg">
        <Link href="book/">
        <LibraryBig />
        </Link>
      </div>
    </div>
  );
}
