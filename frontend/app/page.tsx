"use client";
import { Russo_One } from "next/font/google";
import { RiDeleteBin2Fill } from "react-icons/ri";
import axios from "axios";
import { useEffect, useState } from "react";

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo-one",
  subsets: ["latin"],
  display: "swap",
});

interface Todo {
  id: number;
  text: string;
  completed?: boolean;
  createdAt: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/todos`)
      .then((res) => setTodos(res.data));
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const res = await axios.post("http://localhost:5000/todos", {
      text: input,
    });
    setTodos((prev) => [...prev, res.data]);
    setInput("");
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-screen  w-full flex justify-center items-center bg-black/95 text-[#fff] backdrop-blur-md">
      <div
        style={{ backgroundImage: 'url("/main-bg.jpg")' }}
        className=" lg:h-[80%] max-lg:h-[80%] lg:w-[50%] max-lg:w-[70%] max-sm:w-[90%] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-2xl bg-white/30 backdrop-blur-md border border-[#444343] shadow-lg bg-cover bg-center bg-no-repeat overflow-auto"
      >
        <div
          className={`${russoOne.variable} h-1/3 rounded-tl-2xl rounded-tr-2xl flex flex-col justify-end items-end`}
          style={{ fontFamily: russoOne.style.fontFamily }}
        >
          <div className="mx-[50px] my-[20px] ">
            <p className="sm:text-[1.5rem] max-lg:text-[1.3rem]">Thurs 9</p>
            <p className="sm:text-[3.5rem] max-lg:text-[2.5rem]">6:23 AM</p>
          </div>
        </div>

        <div className="mt-[40px] mx-[40px]">
          <form onSubmit={handleAdd} className="flex ">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-black border-r-0 w-full py-[20px] px-[20px] outline-0 rounded-3xl rounded-tr-none rounded-br-none bg-white/20 backdrop-blur-sm"
              placeholder="Add a todo..."
            />
            <button
              type="submit"
              className="border border-black py-[10px]  px-[20px] rounded-tr-3xl rounded-br-3xl cursor-pointer bg-white/20 backdrop-blur-sm"
            >
              Add
            </button>
          </form>

          <div className="mt-[30px] flex flex-col gap-4">
            {todos.map((todo: Todo) => (
              <div
                key={todo.id}
                className="border border-black flex justify-between px-[30px] py-[10px] rounded-lg bg-white/20 backdrop-blur-sm"
              >
                <div>
                  <p className="font-bold">{todo.text}</p>
                  <p className="text-sm text-gray-300">
                    {todo.createdAt
                      ? new Date(todo.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "No time"}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    className="scale-200 cursor-pointer accent-[#7e7b7b] hover:text-[#000000]"
                    type="checkbox"
                    name="status"
                    id="status"
                  />
                  <button onClick={() => handleDelete(todo.id)}>
                    <RiDeleteBin2Fill className="text-[2rem] text-[#979494] hover:text-[#000000] cursor-pointer" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
