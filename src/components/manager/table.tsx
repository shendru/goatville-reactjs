import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Tag, CircleDashed, CircleDollarSign, Mars, Venus } from 'lucide-react';
import { IconDotsVertical } from "@tabler/icons-react";
import { getGoats } from "@/app/dashboard/data";
import { Goat, ResponseGetGoat } from "@/app/dashboard/Goat";

export default function Table() {
  const [sex, setSex] = useState<string>("");
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

  // useEffect(() => {
  //   // Parse the Data Here
  //   if (data && data.data) {
  //     const finalData = Array.isArray(data.data) ? data.data : [data.data as Goat];

  //     for (let i = 0; i < finalData.length; i++) {
  //     console.log(finalData[i].rfid_tag);
  //     }
  //   }
  // }, [data]);

  return (
    <>
      <div className="flex justify-between mx-[4rem]">
        <div>Goat List</div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer" variant="outline">
              + Add New Goat
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Goat</DialogTitle>
              <DialogDescription>
                Fill in the goat's details below to register it in your
                inventory. Make sure all required fields are completed
                accurately before saving.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                RFID
              </Label>
              <Input
                id="rfid"
                value=""
                defaultValue=""
                className="col-span-3"
              />
            </div>
            <div className="grid py-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Availability
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="For Sale">For Sale</SelectItem>
                      <SelectItem value="Sold">Sold</SelectItem>
                      <SelectItem value="Reserved">Reserved</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value=""
                defaultValue=""
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Breed
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Breed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Breed 1">Breed 1</SelectItem>
                    <SelectItem value="Breed 2">Breed 2</SelectItem>
                    <SelectItem value="Breed 3">Breed 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Sex
              </Label>
              <Select value={sex} onValueChange={setSex}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Sex" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {sex === "Female" && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Pregnant?
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Section 1">Yes</SelectItem>
                      <SelectItem value="Section 2">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Age
              </Label>
              <Input
                id="age"
                value="0"
                defaultValue=""
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Weight
              </Label>
              <Input
                id="weight"
                value=""
                defaultValue=""
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Color
              </Label>
              <Input
                id="color"
                value=""
                defaultValue=""
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Horn Status
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Horn Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Section 1">Horned</SelectItem>
                    <SelectItem value="Section 2">Polled</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                value=""
                defaultValue=""
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button className="cursor-pointer" type="submit">
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-[4rem]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Goat ID
              </th>
              <th scope="col" className="px-6 py-3">
                Availability
              </th>
              <th scope="col" className="px-6 py-3">
                Sex
              </th>
              <th scope="col" className="px-6 py-3">
                Breed
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data?.data && Array.isArray(data.data) ? (
              data.data.map((product: Goat, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.goat_id}
                  </th>
                  <td className="px-6 py-6 flex items-center gap-[0.5rem]">{(product.availability === "For Sale" ? <Tag className="text-stone-700" /> : product.availability === "Reserved" ? <CircleDashed className="bg-[#eab308] text-white rounded-full"/> : <CircleDollarSign className=" bg-green-600 text-white rounded-full"/>)}{product.availability}</td>
                  <td className="px-6 py-6">{product.sex === "Male" ? <Mars className="text-[#34B0FF]" /> : <Venus className="text-[#F4C9A8]" />}</td>
                  <td className="px-6 py-6">{product.breed}</td>
                  <td className="px-6 py-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                          size="icon"
                        >
                          <IconDotsVertical />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-32">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Reserved...</DropdownMenuItem>
                        <DropdownMenuItem className="text-green-700">
                          Sold
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
