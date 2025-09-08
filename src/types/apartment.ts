export interface Apartment {
    imageTitlePath: string;
    imagesPath: string[];
    address: string;
    price: number;
    description: string;//Описание
    features: string[];//Особенности опционально
    cordinates: number[];//Расположение для карты
    type: string;//Комната или квартира
    totalRoom: number;//Комнат в квартире
    square: number;//Площадь
    floor: number;//Этаж
}