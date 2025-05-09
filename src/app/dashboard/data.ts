import { Goat, ResponseGetGoat } from "./Goat";

import axios from "axios";

export async function getGoats() {
  const res: { data: ResponseGetGoat } = await axios.get(
    "https://api-goatville.zaide.online/api/v1/goat/getAllGoats",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
}

export async function addNewGoats(bod: Goat) {
  const res = await axios.post(
    "https://api-goatville.zaide.online/api/v1/goat/createGoatData",
    {
      rfidTag: bod.rfid_tag,
      breed: bod.breed,
      sex: bod.sex,
      age: bod.age,
      weight: bod.weight,
      color: bod.color,
      hornStatus: bod.horn_status,
      price: bod.price,
      availability: bod.availability,
      isPregnant: bod.isPregnant,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
}

export async function deleteGoat(id: number) {
  const res = await axios.delete(
    "https://api-goatville.zaide.online/api/v1/goat/deleteGoatByID",
    {
      params: { goatID: id },
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
}

export async function updateGoat(id: number, bod: Goat) {
  const res = await axios.put(
    "https://api-goatville.zaide.online/api/v1/goat/updateGoatData",
    {
      goatID: id,
      rfidTag: bod.rfid_tag,
      breed: bod.breed,
      sex: bod.sex,
      age: bod.age,
      weight: bod.weight,
      color: bod.color,
      hornStatus: bod.horn_status,
      price: bod.price,
      availability: bod.availability,
      isPregnant: bod.isPregnant,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
}
