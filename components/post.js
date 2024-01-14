import Link from 'next/link';
import Image from "next/image";

// ************ Styles ************
import styles from '../styles/post.module.css';

// ************ Utils *************
import { formatDate } from '../utils/helpers';

const Post = ({post}) => {
    const {title, content, image, url, publishedAt} = post.attributes;
    const imageUrl = image.data.attributes.formats.small.url;
    return (
        <article className={styles.post}>
            <Image className={styles.image} src={imageUrl} width={400} height={300} alt={`${title} Post Image`} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.date}>{formatDate(publishedAt)}</p>
                <p className={styles.overview}>{content}</p>
                <Link className={styles.link} href={`/posts/${url}`}>Read More</Link>
            </div>
        </article>
    )
}

export default Post
