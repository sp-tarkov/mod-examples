export interface IBuyClothingRequestData {
    Action: "CustomizationBuy";
    offer: string;
    items: Item[];
}
export interface Item {
    del: boolean;
    id: string;
    count: number;
}
