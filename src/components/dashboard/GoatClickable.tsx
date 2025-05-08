import { useEffect } from "react";
import { Mars, Venus } from "lucide-react";
import CuteGoat from "../../assets/cutegoat.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Goat } from "@/app/dashboard/Goat";

function GoatClickable(props : Goat) {
  useEffect(() => {
    
    console.log(props);

  },[]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="flex justify-between p-2 mb-2 bg-black/10 cursor-pointer rounded-md">
          <div className="px-2 flex items-center gap-[0.5rem]">
            <img
              className="rounded-full w-[40px] h-[40px]"
              src={CuteGoat}
              alt=""
            />
            <p>{props.goat_id}</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-amber-200"></div>
            <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-black/40"></div>
            <div className="w-[1rem] h-[1rem] border-1 border-black/40 rounded-full bg-white"></div>
          </div>
          <div className="flex justify-end items-center">
            {props.sex === "Male" ? <Mars className="text-[#34B0FF]" /> : <Venus className="text-[#F4C9A8]" />}
            
          </div>
          <p className="text-end self-center ">{props.breed}</p>
        </section>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ID: {props.goat_id}</DialogTitle>
        </DialogHeader>
        <div>
          <img src={CuteGoat} alt="" />
        </div>
        <section className="goatDetails space-y-1 text-sm mt-4">
          <p>
            <strong>Goat ID:</strong> G0001
          </p>
          <p>
            <strong>Breed:</strong> Anglo-Nubian
          </p>
          <p>
            <strong>Sex:</strong> Female
          </p>
          <p>
            <strong>Age:</strong> 2 years 3 months
          </p>
          <p>
            <strong>Weight (Estimate):</strong> 43.5 kg
          </p>
          <p>
            <strong>Color:</strong> Brown with white patches
          </p>
          <p>
            <strong>Horn Status:</strong> Horned
          </p>
          <p>
            <strong>Health Status:</strong> Healthy
          </p>
          <p>
            <strong>Location:</strong> Barn A - Stall 5
          </p>
          <p>
            <strong>Availability:</strong> For Sale
          </p>
          <p>
            <strong>Price:</strong> ₱5,800
          </p>
          <p>
            <strong>Notes:</strong> Calm temperament, ideal for breeding
          </p>
        </section>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default GoatClickable;
