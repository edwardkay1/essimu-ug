export interface Smartphone {
    id: number;
    name: string;
    brand: string;
    specs: string;
    price: number;
    storage: string;
    image: string;
    status: "In Stock" | "Low Stock";
    badge?: string;
}

export const smartphoneData: Smartphone[] = [
    { id: 1, name: "iPhone 14 Pro Max", brand: "Apple", specs: "256GB • Deep Purple", price: 1099, storage: "256GB", image: "/Image/iphone14.png", status: "In Stock", badge: "Best Seller" },
    { id: 2, name: "Samsung Galaxy S23 Ultra", brand: "Samsung", specs: "512GB • Phantom Black", price: 1199, storage: "512GB", image: "/Image/s23.png", status: "In Stock", badge: "New Arrival" },
    { id: 3, name: "Google Pixel 7 Pro", brand: "Google", specs: "128GB • Hazel", price: 899, storage: "128GB", image: "/Image/pixel7.png", status: "Low Stock" },
    { id: 4, name: "Tecno Spark 20 Pro", brand: "Tecno", specs: "256GB • Moonlit Black", price: 250, storage: "256GB", image: "/Image/tecnospark20.png", status: "In Stock", badge: "Budget King" },
    { id: 5, name: "Tecno Spark 10C", brand: "Tecno", specs: "128GB • Meta Blue", price: 150, storage: "128GB", image: "/Image/tecnospark10.png", status: "In Stock" },
    { id: 6, name: "Infinix Note 30", brand: "Infinix", specs: "256GB • Variable Gold", price: 280, storage: "256GB", image: "/Image/infinix30.png", status: "In Stock" }
];