import Image from "next/image"
import styles from './page.module.css'

const BlogPost = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.info}>
                    <h1 className={styles.title}>Judul</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur voluptates, adipisci culpa iure reiciendis aliquam rem consequuntur iste alias vitae. Excepturi similique deserunt omnis culpa impedit magni. Expedita, eaque praesentium.
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>User Name</span>
                    </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src= "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                            alt=""
                            fill={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident fuga inventore rem quod vero voluptates harum illo tenetur molestias!
                    </p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident fuga inventore rem quod vero voluptates harum illo tenetur molestias!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident fuga inventore rem quod vero voluptates harum illo tenetur molestias!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost