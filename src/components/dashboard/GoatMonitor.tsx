import { Slash, Monitor } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import GoatLive from "../../assets/videos/goat-live.mp4";

function GoatMonitor() {
  return (
    <>
      <Breadcrumb className="my-[1rem]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="h-[6rem] mb-[1rem] bg-white"></section>
      <section className="h-[35rem] flex gap-[1rem]">
        <div className="flex-1 bg-white">
          <div className="ml-[0.5rem] my-[0.5rem] flex items-center gap-[0.5rem]">
            <Monitor />
            <p className="font-bold">Real-Time Goat Monitoring</p>
          </div>
        </div>
        <div className="w-[60%] flex items-center bg-[#1D1D1D]">
          <video autoPlay loop muted>
            <source src={GoatLive} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default GoatMonitor;
