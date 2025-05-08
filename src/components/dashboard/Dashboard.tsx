import React from "react";
import GoatTestImage from "../../assets/goat-test-img.jpg";
import GoatMonitor from "./GoatMonitor";
import { Monitor } from "lucide-react";
import GoatLive from "../../assets/videos/goat-live.mp4";
import GoatClickable from "./GoatClickable";

function Dashboard() {
  return (
    <div className="flex-1 flex">
      <section className="w-[25%] bg-white shadow-2xl">
        <div className="mx-[2rem]">
          <div className="mt-[4rem] mb-[2rem] h-[2rem] flex items-center">
            <p className="font-bold text-2xl">List</p>
          </div>
          <div>
            <p className="font-bold mb-3">Detected Goats:</p>
          </div>
          <div>
            <GoatClickable />
            <GoatClickable />
            <GoatClickable />
            <GoatClickable />
            <GoatClickable />
            <GoatClickable />
          </div>
        </div>
      </section>
      {/* <div className="w-[75%] flex-row mx-auto">
        <GoatMonitor />
      </div> */}
      <section className="flex-1">
        <div className="mx-[2rem]">
          <div className="mt-[4rem] h-[2rem] gap-[0.5rem] flex items-center mb-[2rem]">
            <Monitor />
            <p className="font-bold text-2xl">Real-Time Goat Monitoring</p>
          </div>
          <div className="relative w-full overflow-hidden rounded-lg">
            <video autoPlay loop muted>
              <source src={GoatLive} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
