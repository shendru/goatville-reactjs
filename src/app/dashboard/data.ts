import { ResponseGetGoat } from "./Goat";

import axios from 'axios';

export async function getGoats(){
    const res: { data: ResponseGetGoat; } = await axios.get("https://api-goatville.zaide.online/api/v1/goat/getAllGoats", {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.data;
}
