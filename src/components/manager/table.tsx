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

import { Tag, CircleDashed, CircleDollarSign, Mars, Venus } from "lucide-react";
import { IconDotsVertical } from "@tabler/icons-react";
import {
  addNewGoats,
  deleteGoat,
  getGoats,
  updateGoat,
} from "@/app/dashboard/data";
import { Goat, ResponseGetGoat } from "@/app/dashboard/Goat";
import { Skeleton } from "@/components/ui/skeleton";

export default function Table() {
  const [data, setData] = useState<ResponseGetGoat>();

  const [openReservationDialog, setOpenReservationDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [formData, setFormData] = useState<Goat>({
    goat_id: 0,
    rfid_tag: "",
    breed: "",
    sex: "",
    age: 0,
    weight: 0,
    color: "",
    horn_status: "",
    price: 0,
    availability: "",
    isPregnant: false,
  });

  const init = async () => {
    const res = await getGoats();
    setData(res);
  };

  useEffect(() => {
    if (data === undefined || data === null) {
      init();
    }
  }, [data]);

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
        {/* <TabsList className="@4xl/main:flex hidden">
          <TabsTrigger value="outline">Goats</TabsTrigger>
        </TabsList> */}
        {/* <div>Goat List</div> */}
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
              <Label htmlFor="rfid" className="text-right">
                RFID
              </Label>
              <Input
                id="rfid"
                defaultValue=""
                className="col-span-3"
                value={formData.rfid_tag}
                onChange={(e) =>
                  setFormData({ ...formData, rfid_tag: e.target.value })
                }
              />
            </div>
            <div className="grid py-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="availability" className="text-right">
                  Availability
                </Label>
                <Select
                  value={formData.availability}
                  onValueChange={(value) =>
                    setFormData({ ...formData, availability: value })
                  }
                >
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
              <Label htmlFor="breed" className="text-right">
                Breed
              </Label>
              <Select
                value={formData.breed}
                onValueChange={(value) =>
                  setFormData({ ...formData, breed: value })
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Breed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Anglo-Nubian">Anglo-Nubian</SelectItem>
                    <SelectItem value="Boer">Boer</SelectItem>
                    <SelectItem value="Saanen">Saanen</SelectItem>
                    <SelectItem value="Toggenburg">Toggenburg</SelectItem>
                    <SelectItem value="Alpine">Alpine</SelectItem>
                    <SelectItem value="LaMancha">LaMancha</SelectItem>
                    <SelectItem value="Kiko">Kiko</SelectItem>
                    <SelectItem value="Angora">Angora</SelectItem>
                    <SelectItem value="Oberhasli">Oberhasli</SelectItem>
                    <SelectItem value="Nigerian Dwarf">
                      Nigerian Dwarf
                    </SelectItem>
                    <SelectItem value="Pygmy">Pygmy</SelectItem>
                    <SelectItem value="Jamnapari">Jamnapari</SelectItem>
                    <SelectItem value="Barbari">Barbari</SelectItem>
                    <SelectItem value="Native">Native</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sex" className="text-right">
                Sex
              </Label>
              <Select
                value={formData.sex}
                onValueChange={(value) =>
                  setFormData({ ...formData, sex: value })
                }
              >
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
            {formData.sex === "Female" && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pregnant" className="text-right">
                  Pregnant?
                </Label>
                <Select
                  value={formData.isPregnant ? "true" : "false"}
                  onValueChange={(value) =>
                    setFormData({ ...formData, isPregnant: value === "true" })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="true">Yes</SelectItem>
                      <SelectItem value="false">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="age" className="text-right">
                Age / month
              </Label>
              <Input
                id="age"
                type="number"
                className="col-span-3"
                value={formData.age}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    age: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weight" className="text-right">
                Weight / kg
              </Label>
              <Input
                id="weight"
                type="number"
                className="col-span-3"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    weight: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="color" className="text-right">
                Color
              </Label>
              <Input
                id="color"
                defaultValue="Describe Color"
                className="col-span-3"
                value={formData.color}
                onChange={(e) =>
                  setFormData({ ...formData, color: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="horn" className="text-right">
                Horn Status
              </Label>
              <Select
                value={formData.horn_status}
                onValueChange={(value) =>
                  setFormData({ ...formData, horn_status: value })
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Horn Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="HORNED">HORNED</SelectItem>
                    <SelectItem value="POLLED">POLLED</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                className="col-span-3"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="cursor-pointer"
                  type="submit"
                  onClick={() => {
                    const createGoatData = async () => {
                      const res = await addNewGoats(formData);
                      setData(res);
                      init();
                    };

                    createGoatData();
                  }}
                >
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
                  <td className="px-6 py-6 flex items-center gap-[0.5rem]">
                    {product.availability === "For Sale" ? (
                      <Tag className="text-stone-700" />
                    ) : product.availability === "Reserved" ? (
                      <CircleDashed className="bg-[#eab308] text-white rounded-full" />
                    ) : (
                      <CircleDollarSign className=" bg-green-600 text-white rounded-full" />
                    )}
                    {product.availability}
                  </td>
                  <td className="px-6 py-6">
                    {product.sex === "Male" ? (
                      <Mars className="text-[#34B0FF]" />
                    ) : (
                      <Venus className="text-[#F4C9A8]" />
                    )}
                  </td>
                  <td className="px-6 py-6">{product.breed}</td>
                  <td className="px-6 py-6 flex justify-end">
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
                        {/* <DropdownMenuItem
                          onClick={() => {
                            setOpenEditDialog(true);
                          }}
                        >
                          Edit
                        </DropdownMenuItem> */}
                        <DropdownMenuItem
                          onClick={() => {
                            setOpenReservationDialog(true);
                          }}
                        >
                          Reservation
                        </DropdownMenuItem>
                        {product.availability !== "Sold" && (
                          <DropdownMenuItem
                            className="text-green-700"
                            onClick={() => {
                              const upG = async () => {
                                console.log(product);
                                let tempPro: any = product;
                                tempPro.availability = "Sold";
                                tempPro.price = parseInt(tempPro.price) || 0;
                                tempPro.isPregnant = false;
                                const res = await updateGoat(
                                  product.goat_id,
                                  tempPro
                                );
                                setData(res);
                                init();
                              };

                              upG();
                            }}
                          >
                            Sold
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => {
                            const deleteG = async () => {
                              const res = await deleteGoat(product.goat_id);
                              setData(res);
                              init();
                            };

                            deleteG();
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Dialog
                      open={openReservationDialog}
                      onOpenChange={setOpenReservationDialog}
                    >
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Reserve Goat</DialogTitle>
                          {product.availability !== "Reserved" && (
                            <DialogDescription>
                              Fill in the details to reserve this goat.
                            </DialogDescription>
                          )}
                        </DialogHeader>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="buyer"
                            className="text-left font-bold"
                          >
                            Buyer's Name
                          </Label>
                          <Input
                            id="buyer"
                            defaultValue=""
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="contact"
                            className="text-left font-bold"
                          >
                            Contact Number
                          </Label>
                          <Input
                            id="contact"
                            defaultValue=""
                            className="col-span-3"
                          />
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button className="cursor-pointer" type="submit">
                              Reserve
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <Skeleton className="py-8 bg-black/10 rounded-md" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
