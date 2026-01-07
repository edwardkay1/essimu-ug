"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string | number; // Firebase IDs are usually strings
    name: string;
    price: number;
    image: string;
    desc?: string;
    qty: number;
    category?: string;
    brand?: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any) => void;
    removeFromCart: (id: string | number) => void;
    updateQty: (id: string | number, delta: number) => void;
    clearCart: () => void;
    subtotal: number;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // --- 1. LOAD FROM LOCAL STORAGE ON MOUNT ---
    useEffect(() => {
        const savedCart = localStorage.getItem("essimu_cart_v1");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart data", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // --- 2. SAVE TO LOCAL STORAGE ON CHANGE ---
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("essimu_cart_v1", JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    const addToCart = (product: any) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => 
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { 
                id: product.id, 
                name: product.name, 
                price: product.price, 
                image: product.image, 
                desc: product.description || product.specs, 
                category: product.category,
                brand: product.brand,
                qty: 1 
            }];
        });
    };

    const updateQty = (id: string | number, delta: number) => {
        setCart(prev => prev.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeFromCart = (id: string | number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("essimu_cart_v1");
    };

    const subtotal = cart.reduce((acc, item) => acc + (Number(item.price) * item.qty), 0);
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, subtotal, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};