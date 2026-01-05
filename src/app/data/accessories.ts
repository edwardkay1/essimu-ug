export interface Accessory {
    id: number;
    name: string;
    brand: string;
    category: "Cases" | "Power" | "Audio" | "Wearables" | "Mounts";
    price: number;
    originalPrice?: number;
    image: string;
    discount?: string;
    device?: string;
}

export const accessoriesData: Accessory[] = [
    { id: 1, name: "Series 7 Smart Band Sport Edition", brand: "Apple", category: "Wearables", price: 199, originalPrice: 249, image: "/Image/watch.png", discount: "-20%" },
    { id: 2, name: "Premium Noise Cancelling Headphones", brand: "Sony", category: "Audio", price: 299, image: "/Image/audio.png" },
    { id: 3, name: "Ultra-Thin MagSafe Clear Case", brand: "Apple", category: "Cases", device: "iPhone 14", price: 35, image: "/Image/case.png" },
    { id: 4, name: "20W USB-C Power Adapter", brand: "Apple", category: "Power", price: 19, image: "/Image/plug.png" },
    { id: 5, name: "Tecno Buds 3", brand: "Tecno", category: "Audio", price: 45, image: "/Image/tecnobuds.png", discount: "New" },
    { id: 6, name: "Universal Dashboard Car Mount", brand: "Generic", category: "Mounts", price: 22, originalPrice: 29, image: "/Image/mount.png" }
];