import { notFound } from "next/navigation";
import Image from "next/image";

// ************ Styles ************
import styles from '@/styles/post.module.css';

// ************ Utils *************
import { formatDate } from '../../../utils/helpers';

export function generateMetadata({params}) {
    return {
        title: `GuitarLA - ${params.post}`,
        description: 'GuitarLA Store - Here you can buy the best guitars in the world. Check out our catalog and find the guitar of your dreams.'
    }
}

async function getPost(url) {
    const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`);
    const post = await res.json()
    if(post.data.length < 1){
        notFound();
    }
    return post
}

const Post = async ({params}) => {
    const url = params.post;
    const {data: post} = await getPost(url);
    const { title, content, image, publishedAt } = post[0].attributes;
    const imageUrl = image.data.attributes.url;
    return (
        <article className={`${styles.post} container ${styles.mt-3}`}>
            <Image className={styles.image} width={400} height={300} src={imageUrl} alt={`${title} Post Image`} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.date}>{formatDate(publishedAt)}</p>
                <p className={styles.text}>{content}</p>
            </div>
        </article>
    )

}

export default Post