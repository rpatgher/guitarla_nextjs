import Image from "next/image";

import styles from '@/styles/guitar.module.css';
import { notFound } from "next/navigation";

import AddToCart from "@/components/addToCart";

export const metadata = {
    title: `GuitarLA - `,
    description: 'GuitarLA Store - Here you can buy the best guitars in the world. Check out our catalog and find the guitar of your dreams.'
}

async function getGuitar(url) {
    const res = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
    const guitar = await res.json()
    if(guitar.data.length < 1){
        notFound();
    }
    return guitar
}

const Guitar = async ({params}) => {
    const url = params.guitar;
    const {data: guitar} = await getGuitar(url);
    const { name, price, description, image } = guitar[0].attributes;
    // metadata.title = `GuitarLA - ${name}`;
    const imageUrl = image.data.attributes.url;

    return (
        <main className={`container ${styles.guitar}`}>
            <Image width={300} height={400} src={imageUrl} alt={`${name} Guitar Image`} />
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className={styles.price}>${price}</p>

                <AddToCart
                    styles={styles}
                    name={name}
                    price={price}
                    image={imageUrl}
                    id={guitar[0].id}
                />
            </div>
        </main>
    )

}

export default Guitar
