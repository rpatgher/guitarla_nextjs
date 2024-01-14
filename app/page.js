import Link from "next/link";

// ************ Styles ************
import stylesGuitars from '../styles/guitars.module.css';
import stylesPosts from '../styles/posts.module.css';

// ********** Components **********
import Guitar from "../components/guitar";
import Post from "../components/post";
import Course from "../components/course";


async function getGuitars() {
  const res = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const guitars = await res.json()
  return guitars
}

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=image`);
  const posts = await res.json()
  return posts
}

async function getCourse() {
  const res = await fetch(`${process.env.API_URL}/course?populate=image`);
  const course = await res.json()
  return course
}

export default async function Home() {
    const [guitarsData, postsData, courseData] = await Promise.all([getGuitars(), getPosts(), getCourse()]);
    const {data: guitars} = guitarsData;
    const {data: posts} = postsData;
    const {data: course} = courseData;
    return (
        <>
          <main className="container">
            <h2 className="heading">Our Collection</h2>
            {guitars.length && (
                <div className={stylesGuitars.guitars}>
                    {guitars.map(guitar => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar?.attributes}
                        />
                    ))}
                </div>
            )}
          </main>
          <Course course={course.attributes} />
          <section className="container">
            <h2 className="heading">Blog</h2>
            <div className={stylesPosts.blog}>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
          </section>
        </>
    )
}