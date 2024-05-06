import { CircleX } from "lucide-react";

const Error = ({ title, message }) => {
  return (
    <div className="flex gap-4 bg-red-400 rounded-md p-4 items-center w-96">
      <div className="">
        <CircleX className="text-red-700" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl text-red-700 font-bold">{title}</h2>
        <p className="text-base text-red-700">{message}</p>
      </div>
    </div>
  );
};

export default Error;
