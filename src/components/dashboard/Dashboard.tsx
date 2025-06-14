import { Monitor } from "lucide-react";
import GoatLive from "../../assets/videos/goat-live.mp4";
import GoatClickable from "./GoatClickable";
import { useState, useEffect } from "react";
import { getGoats } from "@/app/dashboard/data";
import { Goat, ResponseGetGoat } from "@/app/dashboard/Goat";
import { Skeleton } from "@/components/ui/skeleton";

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
            <p className="font-bold text-2xl">Overview</p>
          </div>
          <div>
            <p className="font-bold mb-3">Detected Goats:</p>
          </div>
          <div>
            {Array.isArray(data?.data) ? (
              data.data.map((_data: Goat, index: number) => (
                <GoatClickable {..._data} key={index} />
              ))
            ) : (
              <Skeleton className="flex justify-between h-[3.5rem] p-2 mb-2 bg-black/10 cursor-pointer rounded-md" />
            )}
          </div>
        </div>
      </section>
      <section className="flex-1">
        <div className="mx-[2rem]">
          <div className="mt-[4rem] h-[3.5rem] gap-[0.5rem] flex items-center mb-[2rem] bg-white shadow-md rounded-[0.2rem] border-1 border-black/5">
            <div className="flex h-full items-center">
              <div className="bg-[#B68D5F] h-full w-[3.5rem] flex items-center justify-center text-white">
                <Monitor className="w-full" />
              </div>
              <div className="flex items-center">
                <p className="ml-[1rem] text-xl h-full">
                  Real-Time Goat Monitoring
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-[0.2rem]">
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
