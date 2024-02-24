import { Outlet } from "react-router-dom";

export default function _layout() {
  return (
    <section className="w-full h-screen space-y-4 flex flex-col items-center justify-center bg-black text-white">
      <Outlet />
    </section>
  );
}
