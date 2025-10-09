import Image from "next/image";

export default function Home(){
  return(
    <div>
      <div className="flex justify-center mt-40">
        <Image
          src="/Logo_V5.png"
          alt="IEEE logo"
          width={300}
          height={125}
          priority={false}
        />
      </div>
      <div className="text-center pt-10 text-[#ffffff] mb-100">
        <h1 className="text-3xl uppercase font-bold mb-4">
          Advancing technology for humanity
        </h1>
      </div>
      <div className="bg-white flex justify-center pt-8 shadow-[0_20px_30px_30px_#000000] pb-8">
        <div className="max-w-[1200px] flex justify-center">
          <div className="">
            <h1 className="text-3xl font-[600]">
              What we do
            </h1>
            <p className="text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <p className="text-2xl">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="min-w-[50px]">
          </div>
          <div className="">
            <Image
              src="/meetingCropped.jpg"
              alt="IEEE meeting"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#000000] flex justify-center pt-8 pb-8">
        <div className="max-w-[1200px] flex justify-center">
          <div className="">
            <h1 className="text-3xl font-[600] text-[#ffffff]">
              What we do
            </h1>
            <p className="text-2xl mb-5 text-[#ffffff]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <p className="text-2xl text-[#ffffff]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="min-w-[50px]">
          </div>
          <div className="">
            <Image
              src="/meetingCropped.jpg"
              alt="IEEE meeting"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] flex justify-center pt-8 pb-8">
        <div className="max-w-[1200px] flex justify-center">
          <div className="">
            <h1 className="text-3xl font-[600] text-[#000000]">
              What we do
            </h1>
            <p className="text-2xl mb-5 text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <p className="text-2xl text-[#000000]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="min-w-[50px]">
          </div>
          <div className="">
            <Image
              src="/meetingCropped.jpg"
              alt="IEEE meeting"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}