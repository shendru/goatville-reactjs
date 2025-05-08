export interface Goat {
    goat_id: number;
    rfid_tag: string;
    breed: string;
    sex: string;
    age: number;
    weight: number;
    color: string;
    horn_status: string;
    price: number;
    availability: boolean;
    isPregnant: boolean;
}

export interface ResponseGetGoat {
    message: string;
    data: Goat;
}