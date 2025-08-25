import Image from "next/image";

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
        <div className="mt-[40px]">
          <form action="POST" className="flex gap-2 border">
            <input
              type="text"
              className="border w-[80%] ml-[40px] py-[10px] rounded-3xl"
            />
            <button type="submit" className="border-2 py-[10px]">
              Add
            </button>
          </form>
          <div>
            <div>
              <p>Dinner </p>
              <p>Today at 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
