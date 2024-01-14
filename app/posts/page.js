import Link from "next/link"

// ************ Styles ************
import styles from '../../styles/posts.module.css';

// ********** Components **********
import Post from "../../components/post";


export const metadata = {
    title: 'GuitarLA - Blog',
    description: 'GuitarLA - Blog. Here you can find the best articles about guitars and music.'
}

async function getPosts() {
    const res = await fetch(`${process.env.API_URL}/posts?populate=image`);
    const posts = await res.json()
    return posts
}

const Blog = async () => {
    const {data: posts} = await getPosts();
    return (
        <main className="container">
            <h2 className="heading">Blog</h2>
            <div className={styles.blog}>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </main>
    )
}

export default Blog
