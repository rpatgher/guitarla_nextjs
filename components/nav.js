'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Nav = ({styles}) => {
    const location = usePathname();
    return (
        <nav className={styles.nav}>
            <Link className={location === '/' ? styles.active : ''} href="/">Home</Link>
            <Link className={location === '/about' ? styles.active : ''} href="/about">About us</Link>
            <Link className={location === '/guitars' ? styles.active : ''} href="/guitars">Store</Link>
            <Link className={location === '/posts' ? styles.active : ''} href="/posts">Blog</Link>
            <Link className={location === '/cart' ? styles.active : ''} href="/cart">
                <Image src="/img/carrito.png" width={100} height={100} alt="Shopping Cart Icon" />
            </Link>
        </nav>
    )
}

export default Nav
