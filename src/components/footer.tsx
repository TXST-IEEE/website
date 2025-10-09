import Image from "next/image";

export default function Footer(){
  return(
    <div className="text-center h-auto bg-[#000000] text-[#ffffff] pb-25">
      <div className="pt-4 flex justify-center mb-4 max-w-[1200px] mx-auto">
        <Image
          src="/ieee_logo_less.png"
          alt="IEEE official Logo"
          width={100}
          height={125}
          priority={false}
        />
      </div>
      <p className="text-2xl">Texas State University IEEE</p>
      <p>Address info and stuff</p>
      <p>Email info perhaps</p>
    </div>
  );
}