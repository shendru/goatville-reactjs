import {
  LayoutDashboard,
  Computer,
  // SlidersHorizontal,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

function Aside() {
  return (
    <aside className="bg-gradient-to-b from-[#B68D5F] via-[#B68D5F] to-[#b89262]  w-[250px] min-w-[250px] max-w-[250px] h-full">
      <section className="mx-[2rem] text-white/90">
        <img
          className="mt-[6rem] mx-auto text-center font-bold text-3xl w-[6rem]"
          src={Logo}
          alt=""
        />
        <p className="text-center font-bold text-3xl">GOATVILLE</p>

        <section className="flex flex-col justify-center gap-[2rem] mt-[10rem] text-center">
          <Link className="flex gap-[1rem] cursor-pointer" to={"/"}>
            <LayoutDashboard className="w-[40px]" /> <p>Live Monitoring</p>
          </Link>
          <Link className="flex gap-[1rem] cursor-pointer" to={"/manager"}>
            <Computer className="w-[40px]" /> <p>Goat Manager</p>
          </Link>
          <Link className="flex gap-[1rem] cursor-pointer" to={"/"}>
            <LogOut className="w-[40px]" /> <p>Logout</p>
          </Link>
        </section>
      </section>
    </aside>
  );
}

export default Aside;
