export interface Product {
    id: number;
    name: string;
    category: "Phone" | "Laptop" | "TV" | "Accessory"; // Added Accessory
    brand: "Apple" | "Samsung" | "HP" | "Dell" | "Other";
    condition: "Brand New" | "UK Used";
    price: number;
    stock: number;
    image: string;
    description: string;
    soldCount: number;
}

export const products: Product[] = [
    // --- PHONES (10 Items) ---
    { id: 1, name: "iPhone 15 Pro Max", category: "Phone", brand: "Apple", condition: "Brand New", price: 1199, stock: 12, image: "/Image/testImage.png", description: "Titanium, 256GB", soldCount: 45 },
    { id: 2, name: "Samsung Galaxy S24 Ultra", category: "Phone", brand: "Samsung", condition: "Brand New", price: 1299, stock: 8, image: "/Image/testImage.png", description: "AI Features, 512GB", soldCount: 30 },
    { id: 3, name: "iPhone 14 Pro", category: "Phone", brand: "Apple", condition: "UK Used", price: 850, stock: 5, image: "/Image/testImage.png", description: "Space Black, 128GB", soldCount: 60 },
    { id: 4, name: "Samsung Galaxy A54", category: "Phone", brand: "Samsung", condition: "Brand New", price: 350, stock: 15, image: "/Image/testImage.png", description: "Awesome Graphite, 128GB", soldCount: 40 },
    { id: 5, name: "iPhone 13", category: "Phone", brand: "Apple", condition: "UK Used", price: 450, stock: 3, image: "/Image/testImage.png", description: "Blue, 128GB", soldCount: 55 },
    { id: 6, name: "Samsung Galaxy S21 FE", category: "Phone", brand: "Samsung", condition: "UK Used", price: 280, stock: 10, image: "/Image/testImage.png", description: "Cloud Navy, 128GB", soldCount: 20 },
    { id: 7, name: "iPhone XR", category: "Phone", brand: "Apple", condition: "UK Used", price: 290, stock: 2, image: "/Image/testImage.png", description: "White, 64GB", soldCount: 110 },
    { id: 8, name: "Samsung Galaxy Z Fold 5", category: "Phone", brand: "Samsung", condition: "Brand New", price: 1599, stock: 4, image: "/Image/testImage.png", description: "Phantom Black, 256GB", soldCount: 10 },
    { id: 9, name: "iPhone 15 Plus", category: "Phone", brand: "Apple", condition: "Brand New", price: 950, stock: 7, image: "/Image/testImage.png", description: "Pink, 128GB", soldCount: 15 },
    { id: 10, name: "Samsung Galaxy S23 Plus", category: "Phone", brand: "Samsung", condition: "UK Used", price: 600, stock: 6, image: "/Image/testImage.png", description: "Cream, 256GB", soldCount: 25 },
    // --- LAPTOPS (10 Items) ---
    { id: 11, name: "MacBook Pro M2", category: "Laptop", brand: "Apple", condition: "Brand New", price: 1999, stock: 4, image: "/Image/testImage.png", description: "14-inch, 16GB RAM", soldCount: 8 },
    { id: 12, name: "HP EliteBook 840 G8", category: "Laptop", brand: "HP", condition: "UK Used", price: 550, stock: 10, image: "/Image/testImage.png", description: "Core i7, 16GB RAM", soldCount: 22 },
    { id: 13, name: "Dell Latitude 5420", category: "Laptop", brand: "Dell", condition: "UK Used", price: 420, stock: 8, image: "/Image/testImage.png", description: "Core i5, 8GB RAM", soldCount: 15 },
    { id: 14, name: "MacBook Air M1", category: "Laptop", brand: "Apple", condition: "UK Used", price: 700, stock: 3, image: "/Image/testImage.png", description: "Space Gray, 8GB RAM", soldCount: 40 },
    { id: 15, name: "HP Spectre x360", category: "Laptop", brand: "HP", condition: "Brand New", price: 1350, stock: 2, image: "/Image/testImage.png", description: "Touchscreen, 4K", soldCount: 5 },
    { id: 16, name: "Dell XPS 13", category: "Laptop", brand: "Dell", condition: "Brand New", price: 1200, stock: 5, image: "/Image/testImage.png", description: "InfinityEdge Display", soldCount: 9 },
    { id: 17, name: "HP ProBook 450 G9", category: "Laptop", brand: "HP", condition: "Brand New", price: 800, stock: 12, image: "/Image/testImage.png", description: "Core i5, 12th Gen", soldCount: 14 },
    { id: 18, name: "Lenovo ThinkPad X1", category: "Laptop", brand: "Other", condition: "UK Used", price: 950, stock: 4, image: "/Image/testImage.png", description: "Carbon Gen 9", soldCount: 11 },
    { id: 19, name: "MacBook Pro 16", category: "Laptop", brand: "Apple", condition: "UK Used", price: 1100, stock: 3, image: "/Image/testImage.png", description: "Core i9, 32GB RAM", soldCount: 6 },
    { id: 20, name: "Microsoft Surface Laptop 5", category: "Laptop", brand: "Other", condition: "Brand New", price: 1050, stock: 6, image: "/Image/testImage.png", description: "Alcantara, 13-inch", soldCount: 3 },
    // --- TELEVISIONS (10 Items) ---
    { id: 21, name: "Samsung QLED 65\"", category: "TV", brand: "Samsung", condition: "Brand New", price: 1200, stock: 4, image: "/Image/testImage.png", description: "4K, Smart TV", soldCount: 10 },
    { id: 22, name: "Samsung Crystal UHD 55\"", category: "TV", brand: "Samsung", condition: "Brand New", price: 550, stock: 10, image: "/Image/testImage.png", description: "4K, HDR10+", soldCount: 25 },
    { id: 23, name: "Sony Bravia XR", category: "TV", brand: "Other", condition: "Brand New", price: 1800, stock: 3, image: "/Image/testImage.png", description: "OLED, 4K", soldCount: 4 },
    { id: 24, name: "LG C3 OLED 48\"", category: "TV", brand: "Other", condition: "Brand New", price: 1100, stock: 5, image: "/Image/testImage.png", description: "Gaming TV, 120Hz", soldCount: 12 },
    { id: 25, name: "Samsung AU8000 43\"", category: "TV", brand: "Samsung", condition: "UK Used", price: 300, stock: 8, image: "/Image/testImage.png", description: "Slim Fit Wall Mount", soldCount: 30 },
    { id: 26, name: "Hisense A6 Series 50\"", category: "TV", brand: "Other", condition: "Brand New", price: 380, stock: 15, image: "/Image/testImage.png", description: "Google TV", soldCount: 45 },
    { id: 27, name: "Samsung Frame TV 55\"", category: "TV", brand: "Samsung", condition: "Brand New", price: 1400, stock: 2, image: "/Image/testImage.png", description: "Art Mode, QLED", soldCount: 3 },
    { id: 28, name: "LG NanoCell 65\"", category: "TV", brand: "Other", condition: "UK Used", price: 650, stock: 4, image: "/Image/testImage.png", description: "Local Dimming", soldCount: 8 },
    { id: 29, name: "Samsung Neo QLED 75\"", category: "TV", brand: "Samsung", condition: "Brand New", price: 2500, stock: 2, image: "/Image/testImage.png", description: "8K Ultra HD", soldCount: 1 },
    { id: 30, name: "TCL 4-Series 55\"", category: "TV", brand: "Other", condition: "UK Used", price: 250, stock: 9, image: "/Image/testImage.png", description: "Roku TV", soldCount: 50 },
    // --- ACCESSORIES (10 Items) ---
    { id: 31, name: "AirPods Pro (2nd Gen)", category: "Accessory", brand: "Apple", condition: "Brand New", price: 249, stock: 20, image: "/Image/testImage.png", description: "Noise Cancelling, MagSafe", soldCount: 85 },
    { id: 32, name: "Samsung 45W Fast Charger", category: "Accessory", brand: "Samsung", condition: "Brand New", price: 35, stock: 50, image: "/Image/testImage.png", description: "USB-C Super Fast Charging", soldCount: 120 },
    { id: 33, name: "Apple MagSafe Leather Case", category: "Accessory", brand: "Apple", condition: "Brand New", price: 59, stock: 15, image: "/Image/testImage.png", description: "iPhone 15 Pro, Midnight", soldCount: 40 },
    { id: 34, name: "Samsung Galaxy Buds 2 Pro", category: "Accessory", brand: "Samsung", condition: "Brand New", price: 180, stock: 12, image: "/Image/testImage.png", description: "Bora Purple, Hi-Fi Sound", soldCount: 25 },
    { id: 35, name: "HP Wireless Mouse & Keyboard", category: "Accessory", brand: "HP", condition: "Brand New", price: 45, stock: 30, image: "/Image/testImage.png", description: "Multi-device connection", soldCount: 65 },
    { id: 36, name: "Dell Thunderbolt Dock WD19", category: "Accessory", brand: "Dell", condition: "UK Used", price: 120, stock: 5, image: "/Image/testImage.png", description: "180W Power Delivery", soldCount: 18 },
    { id: 37, name: "Apple 20W USB-C Adapter", category: "Accessory", brand: "Apple", condition: "Brand New", price: 25, stock: 100, image: "/Image/testImage.png", description: "Fast charging for iPhone", soldCount: 300 },
    { id: 38, name: "Samsung 128GB MicroSD", category: "Accessory", brand: "Samsung", condition: "Brand New", price: 20, stock: 40, image: "/Image/testImage.png", description: "EVO Select, 130MB/s", soldCount: 90 },
    { id: 39, name: "Logitech MX Master 3S", category: "Accessory", brand: "Other", condition: "Brand New", price: 99, stock: 8, image: "/Image/testImage.png", description: "Performance Wireless Mouse", soldCount: 12 },
    { id: 40, name: "Belkin Screen Protector", category: "Accessory", brand: "Other", condition: "Brand New", price: 29, stock: 60, image: "/Image/testImage.png", description: "Tempered Glass for iPhone", soldCount: 150 },
];

export const getStats = () => {
    const totalStock = products.reduce((acc, curr) => acc + curr.stock, 0);
    const totalSold = products.reduce((acc, curr) => acc + curr.soldCount, 0);
    const lowStockCount = products.filter(p => p.stock < 5).length;
    
    return {
        totalStock,
        totalSold,
        lowStockCount,
        revenue: products.reduce((acc, curr) => acc + (curr.price * curr.soldCount), 0)
    };
};