'use client'

import { CartContext } from '@/app/cart-provider';
import { useContext, useState, useEffect } from "react";
import Image from "next/image";

// ************ Styles ************
import styles from '@/styles/cart.module.css';

const Cart = () => {
    const { cart, handleUpdateCart, handleRemoveItem } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + (item.price * item.amount), 0));
    }, [cart]);

    return (
        <div className={styles.content}>
            <div className={styles.cart}>
                <h2>Articles</h2>
                {cart?.length === 0 ? <p className="empty">Your cart is empty</p> : (
                    cart?.map(item => (
                        <div className={styles.product} key={item.id}>
                            <div>
                                <Image src={item.image} width={200} height={400} alt={`${item.name} Product Image`} />
                            </div>
                            <div>
                                <p className={styles.name}>{item.name}</p>
                                <p className="amount">Amount:</p>
                                <select 
                                    className={styles.select} 
                                    value={item.amount}
                                    onChange={e => handleUpdateCart({
                                        id: item.id,
                                        amount: +e.target.value
                                    })}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <p className={styles.price}>$<span>{item.price}</span></p>
                                <p className={styles.subtotal}>Subtotal: $<span>{item.price * item.amount}</span></p>
                            </div>
                            <button
                                type="button"
                                className={styles['btn-remove']}
                                onClick={() => handleRemoveItem(item.id)}
                            >X</button>
                        </div>
                    ))
                )}
            </div>
            <aside className={styles.overview}>
                <h3>Order Overview</h3>
                <p>Total: ${total}</p>
            </aside>
        </div>
    )
}

export default Cart
