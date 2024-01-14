import Link from "next/link"

// ************ Styles ************
import styles from '../../styles/guitars.module.css';

// ********** Components **********
import Guitar from "../../components/guitar";

export const metadata = {
    title: 'GuitarLA - Store',
    description: 'GuitarLA Store - Here you can buy the best guitars in the world. Check out our catalog and find the guitar of your dreams.'
}

async function getGuitars() {
    const res = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    const guitars = await res.json()
    return guitars
}

const Store = async () => {
    const {data: guitars} = await getGuitars();
    return (
        <main className="container">
            <h2 className="heading">Our Collection</h2>
            {guitars.length && (
                <div className={styles.guitars}>
                    {guitars.map(guitar => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar?.attributes}
                        />
                    ))}
                </div>
            )}

        </main>
    )
}

export default Store
