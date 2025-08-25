import { RiDeleteBin2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="border-2 h-screen w-full flex justify-center items-center ">
      <div className="h-[70%] border w-[50%] rounded-2xl">
        <div
          className="h-1/3 rounded-tl-2xl rounded-tr-2xl"
          style={{
            backgroundImage: 'url("/bg-image.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p>Thurs 9</p>
          <p>6:23 AM</p>
        </div>
        <div className="mt-[40px] mx-[40px]">
          <form action="POST" className="flex ">
            <input
              type="text"
              className="border border-r-0 w-full py-[10px] rounded-3xl rounded-tr-none rounded-br-none"
            />
            <button
              type="submit"
              className="border py-[10px] px-[20px] rounded-tr-3xl rounded-br-3xl"
            >
              Add
            </button>
          </form>
          <div className="border mt-[30px] flex justify-between">
            <div className="">
              <p>Dinner </p>
              <p>Today at 6:00 PM</p>
            </div>
            <div className="flex">
              <input type="radio" name="status" id="status" />
              <RiDeleteBin2Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
