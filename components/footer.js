import Image from "next/image"
import Link from "next/link"

// ************ Styles ************
import styles from '../styles/footer.module.css';

// ********** Components **********
import Nav from './nav';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <Nav
                    styles={styles}
                />

                <p className={styles.copyright}>All rights reserverd.&reg; GuitarLA {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer
