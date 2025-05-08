import {
  LayoutDashboard,
  Computer,
  SlidersHorizontal,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <aside className="bg-gradient-to-b from-[#3A3CFF] via-[#3A3CFF] to-[#6B6DFF]  w-[250px] min-w-[250px] max-w-[250px] h-full">
      <section className="mx-[2rem] text-white/90">
        <p className="my-[6rem] text-center font-bold text-3xl">eAgri</p>

        <section className="flex flex-col justify-center gap-[2rem] mt-[13rem] text-center">
          <Link className="flex gap-[1rem] cursor-pointer" to={"/"}>
            <LayoutDashboard className="w-[40px]" /> <p>Live Monitoring</p>
          </Link>
          <Link className="flex gap-[1rem] cursor-pointer" to={"/manager"}>
            <Computer className="w-[40px]" /> <p>Goat Manager</p>
          </Link>
          {/* <div className="flex gap-[1rem] cursor-pointer">
            <SlidersHorizontal className="w-[40px]" /> <p>Settings</p>
          </div> */}
          <Link className="flex gap-[1rem] cursor-pointer" to={"/"}>
            <LogOut className="w-[40px]" /> <p>Logout</p>
          </Link>
        </section>
      </section>
    </aside>
  );
}

export default Aside;
