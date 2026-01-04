export interface Product {
    id: number;
    name: string;
    specs: string;
    price: string;
    rating: number;
    image: string;
    badge?: string;
    badgeType?: 'discount' | 'new';
}

export const bestSellers: Product[] = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        specs: "256GB | Titanium",
        price: "Ugx 3,999,000",
        rating: 4.9,
        image: "/Image/iphone15.png",
        badge: "-10%",
        badgeType: 'discount'
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        specs: "512GB | Phantom Black",
        price: "Ugx 2,899,000",
        rating: 4.8,
        image: "/Image/s24.png"
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        specs: "128GB | Obsidian",
        price: "Ugx 1,799,000",
        rating: 4.7,
        image: "/Image/pixel8.png"
    },
    {
        id: 4,
        name: "JBL WH-1000XM5",
        specs: "Noise Cancelling | Silver",
        price: "Ugx 250,000",
        rating: 5.0,
        image: "/Image/jbl.png",
        badge: "New",
        badgeType: 'new'
    }
];