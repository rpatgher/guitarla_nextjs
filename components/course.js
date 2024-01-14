// ************ Styles ************
import styles from '../styles/course.module.css';

const Course = ({course}) => {
    const {title, content, image} = course;
    const imageUrl = image.data.attributes.url;
    return (
        <section className={`${styles.course}`}
                    style={{
                        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imageUrl})`
                    }}
        >
            <div className={`${styles['course-grid']} container`}>
                <div className={styles.content}>
                    <h2 className="heading">{title}</h2>
                    <p className={styles.text}>{content}</p>
                </div>
            </div>
        </section>
    )
}

export default Course
