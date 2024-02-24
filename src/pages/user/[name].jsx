import { Icon } from "@iconify/react";
// import { useNavigate, useParams } from "react-router-dom";

const UserName = () => {
  const Navigate = useNavigate();
  let { name } = useParams();
  return (
    <>
      <p>
        Hello <span className=" italic">{name}</span>, This is
      </p>
      <div>
        <BubbleText />
      </div>
      <div>
        <button
          onClick={() => Navigate("/")}
          className=" bg-zinc-900 border border-zinc-800 flex items-center gap-3 rounded-full px-4 p-2 text-zinc-300"
        >
          <Icon icon="line-md:arrow-left" className="text-xl text-zinc-300  " />
          Back Home
        </button>
      </div>
      <p className=" text-base text-zinc-300 mt-2 ">
        [<span className="italic">User Layout</span>]
      </p>
    </>
  );
};

export default UserName;
