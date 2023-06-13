import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}

    const BlogPost = async ({ params }) => {
        const data = await getData(params.id);

        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{data.title}</h1>
                        <p className={styles.desc}>
                            {data.body}
                        </p>
                        <div className={styles.author}>
                            <Image
                                src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.avatar}
                            />
                            <span className={styles.username}>username</span>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                            alt=""
                            fill={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem nesciunt recusandae amet porro, temporibus excepturi, magni unde voluptatem rem veniam laborum, soluta maiores accusantium molestiae! Assumenda quos labore minus?
                    </p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem nesciunt recusandae amet porro, temporibus excepturi, magni unde voluptatem rem veniam laborum, soluta maiores accusantium molestiae! Assumenda quos labore minus?
                    </p>
                </div>
            </div>
        );
    };

export default BlogPost;