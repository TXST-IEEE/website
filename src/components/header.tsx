import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return(
    <div className="bg-[#000000] top-0 sticky h-15">
      <div className="max-w-[1200px] mx-auto items-center flex justify-between h-[40px] pt-4 text-[#FFFFFF]">
      <Link href="/">
        <Image
          src="/ieee_logo_less.png"
          alt="IEEE official Logo"
          width={100}
          height={125}
          priority={false}
        />
      </Link>
      <ul className="text-2xl flex justify-between items-center">
        <li>
          <Link className="px-4" href="/">Home</Link>
        </li>
        <li>
          <Link className="px-4" href="/about">About</Link>
        </li>
      </ul>
      </div>
    </div>
  );
}