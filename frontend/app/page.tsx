import { Russo_One } from "next/font/google";
import { RiDeleteBin2Fill } from "react-icons/ri";

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo-one",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black/95 text-[#fff] backdrop-blur-md">
      <div
        style={{ backgroundImage: 'url("/main-bg.jpg")' }}
        className="h-[70%] w-[50%] rounded-2xl bg-white/30 backdrop-blur-md border border-[#444343] shadow-lg bg-cover bg-center bg-no-repeat"
      >
        <div
          className={`${russoOne.variable} h-1/3 rounded-tl-2xl rounded-tr-2xl flex flex-col justify-end items-end`}
          style={{ fontFamily: russoOne.style.fontFamily }}
        >
          <div className="mx-[50px] my-[20px] ">
            <p className="text-[1.5rem]">Thurs 9</p>
            <p className="text-[3.5rem]">6:23 AM</p>
          </div>
        </div>

        <div className="mt-[40px] mx-[40px]">
          <form action="POST" className="flex ">
            <input
              type="text"
              className="border border-black border-r-0 w-full py-[20px] px-[20px] outline-0 rounded-3xl rounded-tr-none rounded-br-none bg-white/20 backdrop-blur-sm"
            />
            <button
              type="submit"
              className="border border-black py-[10px] px-[20px] rounded-tr-3xl rounded-br-3xl cursor-pointer bg-white/20 backdrop-blur-sm"
            >
              Add
            </button>
          </form>

          <div className="border border-black mt-[30px] flex justify-between px-[30px] py-[10px] rounded-lg bg-white/20 backdrop-blur-sm">
            <div>
              <p className="font-bold">Dinner </p>
              <p className="text-[.8rem] text-[#7e7a7a]">Today at 6:00 PM</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="scale-200 cursor-pointer accent-[#7e7b7b] hover:text-[#000000]"
                type="checkbox"
                name="status"
                id="status"
              />
              <button>
                <RiDeleteBin2Fill className="text-[2rem] text-[#979494] hover:text-[#000000] cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
