import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Hyer. All rights reserved.</div>
            <div className={styles.socials}>
                <Image src="/1.png" width={15} height={15} className={styles.icon} alt='facebook icon'/>
                <Image src="/2.png" width={15} height={15} className={styles.icon} alt='instagram icon'/>
                <Image src="/3.png" width={15} height={15} className={styles.icon} alt='twitter icon'/>
                <Image src="/4.png" width={15} height={15} className={styles.icon} alt='youtube icon'/>
            </div>
        </div>
    )
}

export default Footer