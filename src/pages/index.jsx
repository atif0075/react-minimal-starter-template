import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";
const index = () => {
  const navigate = useNavigate();
  const [route, setRoute] = useState("");
  return (
    <div className="w-full px-2 h-screen space-y-4 flex flex-col items-center justify-center bg-black text-white">
      <div>
        <BubbleText />
      </div>
      <div className=" w-full grid place-items-center">
        <div className=" relative w-full max-w-md">
          <input
            type="text"
            onChange={(e) => setRoute(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && route !== "") {
                navigate(`/user/${route}`);
              }
            }}
            className="bg-zinc-900 placeholder:italic outline-none text-white px-4 py-2.5 rounded-full border border-zinc-800 w-full max-w-md  "
            placeholder="Enter your name for dynamic route"
          />
          <button
            onClick={() => (route !== "" ? navigate(`/user/${route}`) : null)}
            className="text-3xl bg-zinc-800 rounded-full p-2 text-zinc-300 absolute right-2 top-1/2 -translate-y-1/2"
          >
            <Icon
              icon="line-md:arrow-left"
              className="text-xl text-zinc-300 rotate-180"
            />
          </button>
        </div>
      </div>
      <p className=" text-base text-zinc-300 mt-2 text-center">
        Vite | TailwindCSS | Auto Import Components | File Based Routing |
        Layout Support | Zustand
      </p>
      <p className=" text-base text-zinc-300 mt-2 ">
        [<span className="italic">Home Layout</span>]
      </p>
    </div>
  );
};

export default index;
