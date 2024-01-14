import Image from "next/image"
import Link from "next/link"

// ************ Styles ************
import styles from '../styles/header.module.css';

// ********** Components **********
import Nav from './nav';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/img/logo.svg" width={300} height={40} alt="GuitarLA Logo" />
                </Link>
                <Nav
                    styles={styles}
                />
            </div>
        </header>
    )
}

export default Header
