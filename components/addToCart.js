'use client'

import { CartContext } from '@/app/cart-provider';
import { useContext, useState } from 'react'

const AddToCart = ({styles, id, name, price, image}) => {
    const [amount, setAmount] = useState(0);

    const { handleAddToCart } = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if amount is selected
        if(amount === 0) {
            alert('Please select an amount');
            return;
        }
        // Build an object with the data to add to the cart
        const guitar = {
            id,
            name,
            price,
            image,
            amount
        }
        // Send the data to
        handleAddToCart(guitar);
    }
    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <label htmlFor="amount">Amount</label>
            <select 
                name="amount" 
                id="amount"
                onChange={e => setAmount(+e.target.value)}
            >
                <option value="0">--- Select ---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <input type="submit" value="Add to Cart" />
        </form>
    )
}

export default AddToCart
