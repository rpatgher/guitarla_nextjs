import Link from "next/link";
import Image from "next/image";

// ************ Styles ************
import styles from '../styles/guitar.module.css';

const Guitar = ({guitar}) => {
    const { name, price, description, image, url } = guitar;
    const imageUrl = image.data.attributes.formats.medium.url;
    return (
        <div className={styles.guitar}>
            <Image src={imageUrl} width={300} height={400} alt={`${name} Guitar Image`} />
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description} >{description}</p>
                <p className={styles.price}>${price}</p>

                <Link className={styles.link} href={`/guitars/${url}`}>View Details</Link>
            </div>
        </div>
    );
}

export default Guitar
