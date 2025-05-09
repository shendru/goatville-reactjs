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

function GoatClickable(props: Goat) {
  useEffect(() => {
    console.log(props);
  }, []);

  if (props.availability === "Sold") {
    return;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="flex justify-between p-2 mb-2 bg-black/10 cursor-pointer rounded-md">
          <div className="px-2 flex items-center gap-[1rem]">
            <img
              className="rounded-full w-[40px] h-[40px]"
              src={CuteGoat}
              alt=""
            />
            <p>
              {"ID: "}
              {props.goat_id}
            </p>
          </div>
          {/* <div className="flex items-center gap-1">
            <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-amber-200"></div>
            <div className="w-[1rem] h-[1rem] border-1 border-black/10 rounded-full bg-black/40"></div>
            <div className="w-[1rem] h-[1rem] border-1 border-black/40 rounded-full bg-white"></div>
          </div> */}
          <div className="flex justify-end items-center">
            {props.sex === "Male" ? (
              <Mars className="text-[#34B0FF]" />
            ) : (
              <Venus className="text-[#F4C9A8]" />
            )}
          </div>
          <p className="text-end w-[40%] self-center ">{props.breed}</p>
        </section>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div>
          <img src={CuteGoat} alt="" />
        </div>
        <section className="goatDetails space-y-1 text-sm">
          <p>
            <strong>Goat ID:</strong> {props.goat_id}
          </p>
          <p>
            <strong>Breed:</strong> {props.breed}
          </p>
          <p>
            <strong>Sex:</strong> {props.sex}
          </p>
          {props.sex === "Female" && (
            <p>
              <strong>isPregnant:</strong> {props.isPregnant ? "Yes" : "No"}
            </p>
          )}
          <p>
            <strong>Age:</strong> {props.age}
          </p>
          <p>
            <strong>Weight (Estimate):</strong>{" "}
            {Number(props.weight).toFixed(2)}
            {" kg"}
          </p>
          <p>
            <strong>Color:</strong> {props.color}
          </p>
          <p>
            <strong>Horn Status:</strong> {props.horn_status}
          </p>
          <p>
            <strong>Availability:</strong> {props.availability}
          </p>
          <p>
            <strong>Price:</strong> {"₱"}
            {props.price}
          </p>

          <hr />
          <p>
            <strong>Owner's Contact Number:</strong> {"09436223469"}
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
