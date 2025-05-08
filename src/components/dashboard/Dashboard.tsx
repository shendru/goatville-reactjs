import { Monitor } from "lucide-react";
import GoatLive from "../../assets/videos/goat-live.mp4";
import GoatClickable from "./GoatClickable";
import { useState, useEffect } from 'react'
import { getGoats } from "@/app/dashboard/data";
import { Goat, ResponseGetGoat } from "@/app/dashboard/Goat";

function Dashboard() {

    const [data, setData] = useState<ResponseGetGoat>();
  
    useEffect(() => {
      const init = async () => {
        const res = await getGoats();
        setData(res);
      };
      if (data === undefined || data === null) {
        init();
      }
    }, []);

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
            {Array.isArray(data?.data) && data.data.map((_data: Goat, index: number) => (
              <GoatClickable {..._data} key={index} />
            ))}
          </div>
        </div>
      </section>
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
