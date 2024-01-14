import { Suspense } from "react";
import CartComponent from "../../components/cart";

export const metadata = {
    title: 'GuitarLA - Shopping Cart',
    description: 'In GuitarLA you can find the best guitars in the world and even a blog to learn how to play them and know more about music.'
}

const Cart = () => {
    return (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>
            <Suspense fallback={<p>Loading feed...</p>}>
                <CartComponent />
            </Suspense>
        </main>
    )
}

export default Cart
