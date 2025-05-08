import { Slash, Monitor, Mars, Venus } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GoatLive from "../../assets/videos/goat-live.mp4";
import GoatClickable from "./GoatClickable";

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

      {/* <section className="h-[6rem] mb-[1rem] bg-white"></section> */}
      <section className="h-[40rem] flex gap-[1rem]">
        <div className="flex-1 bg-white rounded-md">
          <div className="ml-[1rem] my-[1rem] flex items-center gap-[0.5rem]">
            <Monitor />
            <p className="font-bold">Real-Time Goat Monitoring</p>
          </div>
          <GoatClickable />
          <GoatClickable />
          <GoatClickable />
          <GoatClickable />
          <GoatClickable />
          <GoatClickable />

          {/* <section className="flex justify-between p-2 bg-black/10 cursor-pointer mx-4 rounded-md">
            <div className="px-2 flex items-center gap-[0.5rem]">
              <img
                className="rounded-full w-[40px] h-[40px]"
                src={CuteGoat}
                alt=""
              />
              <p>G0001</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-amber-200"></div>
              <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-black/40"></div>
              <div className="w-[1rem] h-[1rem] border-1 border-black/40 rounded-full bg-white"></div>
            </div>
            <div className="flex justify-end items-center">
              <Mars className="text-[#34B0FF]" />
            </div>
            <p className="text-end self-center ">Hybrid</p>
          </section> */}
          {/* <table className="w-full">
            <div className="flex justify-between">
              <div className="px-2">Goat ID</div>
              <div className="px-2">Gender</div>
              <div className="px-2">Colors</div>
              <div className="px-2">Breed</div>
            </div>
            <div className="flex justify-between">
              <div className="px-2 flex items-center gap-[0.5rem]">
                <img
                  className="rounded-full w-[40px] h-[40px]"
                  src={CuteGoat}
                  alt=""
                />
                <p>G0001</p>
              </div>
              <div className="px-2">Gender</div>
              <div className="px-2">Colors</div>
              <div className="px-2">Breed</div>
            </div>
          </table> */}
          {/* <Table>
            <TableHeader className="border-b-2 border-black/1 shadow-md">
              <TableRow>
                <TableHead className="w-[60px]">Goat ID</TableHead>
                <TableHead className="text-right">Gender</TableHead>
                <TableHead className="text-right">Colors</TableHead>
                <TableHead className="text-right">Breed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="cursor-pointer">
                <TableCell className="font-medium border-black/7 border-b-1 flex items-center gap-[1rem] h-[4rem]">
                  <img
                    className="rounded-full w-[40px] h-[40px]"
                    src={CuteGoat}
                    alt=""
                  />
                  <p>G0001</p>
                </TableCell>
                <TableCell className="border-black/7 border-b-1">
                  <div className="flex justify-end">
                    <Mars className="text-[#34B0FF]" />
                  </div>
                </TableCell>
                <TableCell className="border-black/7 border-b-1">
                  <div className="flex items-center justify-end gap-1">
                    <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-amber-200"></div>
                    <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-black/40"></div>
                    <div className="w-[1rem] h-[1rem] border-1 border-black/40 rounded-full bg-white"></div>
                  </div>
                </TableCell>
                <TableCell className="border-black/7 border-b-1">
                  <p className="text-end ">Credit Card</p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table> */}
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
