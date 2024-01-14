import Image from "next/image"

// ************ Styles ************
import styles from '../../styles/about.module.css';

export const metadata = {
    title: 'GuitarLA - About Us',
    description: 'In GuitarLA you can find the best guitars in the world and even a blog to learn how to play them and know more about music.'
}

const About = () => {
    return (
        <main className="container">
            <h2 className="heading">About Us</h2>
            <div className={styles.content}>
                <Image src="/img/nosotros.jpg" width={1000} height={800}  alt="About Us Image"  />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet quod esse assumenda itaque tenetur dolorem! Voluptas, eveniet tenetur assumenda autem eos reprehenderit beatae nihil impedit nam placeat, laboriosam consequatur?</p>
                    <p>Veritatis, obcaecati eos mollitia vel animi nam temporibus itaque harum porro molestiae at! Placeat vero possimus impedit commodi, quaerat maiores. Quia dignissimos libero pariatur nostrum ut eligendi? Quasi ducimus vel repellat mollitia autem quas sint rerum sed exercitationem molestiae praesentium</p>
                </div>
            </div>
        </main>
    )
}

export default About