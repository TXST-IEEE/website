import Image from "next/image";

export default function Home(){
  return(
    <div>
      <div className="max-w-[1200px] mx-auto flex mt-30">
        <div>
          <div>
            <Image
              src="/Logo_V5.png"
              alt="IEEE logo"
              width={300}
              height={125}
              priority={false}
            />
          </div>
          <div className="pt-6 text-[#ffffff] pb-14">
            <h1 className="text-[26px] uppercase font-bold mb-4">
              Advancing technology for humanity
            </h1>
          </div>
          <div className="gap-5 flex">
            <button className="memberButton badassButton">
              <span className="font-bold text-[22px]">Become a Member</span>
              <Image className="p-[8px]"
                src="/icon_member.svg"
                alt="A little guy"
                width={60}
                height={125}
                priority={false}
              />
            </button>
            <button className="badassButton rounded-[8px] bg-[#ffffff28] border-2 p-2 border-[#fff] text-[#fff]">
              <span className="font-bold text-[22px]">View Events</span>
            </button>
          </div>
        </div>
        <div className="min-w-[40px]">
        </div>
        <div>
          <Image className="rounded-2xl"
            src="/meetingCropped.jpg"
            alt="Meeting"
            width={800}
            height={200}
          />
        </div>
      </div>
      <div className="flex justify-center mb-20 pt-14 bruh2">
        <Image className="scrollFadeOut"
          src="/Arrow_downward.svg"
          alt="Arrow that points downward"
          width={60}
          height={125}
          priority={false}
        />
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