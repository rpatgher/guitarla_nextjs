'use client'
 
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        const carLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) ?? [] : [];
        setCart(carLS);
    }, []);
    
    useEffect(() => {
        if(firstLoad){
            if(cart?.length === 0){
                setFirstLoad(false);
                return;
            }
        }
        setFirstLoad(false);
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (guitar) => {
        if(cart.some(item => item.id === guitar.id)){
            setCart(cart.map(item => {
                if(item.id === guitar.id){
                    return {
                        ...item,
                        amount: guitar.amount
                    }
                }
                return item;
            }))
        }else{
            setCart([...cart, guitar]);
        }
    }

    const handleUpdateCart = ({id, amount}) => {
        setCart(cart.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    amount
                }
            }
            return item;
        }))
    }

    const handleRemoveItem = id => {
        setCart(cart.filter(item => item.id !== id));
    }
    
    return (
        <CartContext.Provider value={{cart, handleAddToCart, handleUpdateCart, handleRemoveItem}}>
            {children}
        </CartContext.Provider>
    )
}