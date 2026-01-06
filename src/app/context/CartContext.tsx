"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Updated Interface to include category and brand
export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    desc?: string;
    qty: number;
    category?: string; // Added for TypeScript compatibility
    brand?: string;    // Added for TypeScript compatibility
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any) => void;
    removeFromCart: (id: number) => void;
    updateQty: (id: number, delta: number) => void;
    subtotal: number;
    totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: any) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => 
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            // 2. Map the incoming product data to the new fields
            return [...prev, { 
                id: product.id, 
                name: product.name, 
                price: product.price, 
                image: product.image, 
                desc: product.specs || product.device, 
                category: product.category, // Map category
                brand: product.brand,       // Map brand
                qty: 1 
            }];
        });
    };

    const updateQty = (id: number, delta: number) => {
        setCart(prev => prev.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, subtotal, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};