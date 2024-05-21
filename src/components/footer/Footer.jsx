import styles from './page.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2024 MyApp. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/vk.png" alt="wk.com" width={15} height={15} className={styles.icon}/>
        <Image src="/inst.png" alt="inst.com" width={15} height={15} className={styles.icon}/>
        <Image src="/twitter.png" alt="twitter.com" width={15} height={15} className={styles.icon}/>
        <Image src="/yt.png" alt="yt.com" width={15} height={15} className={styles.icon}/>
      </div>
    </footer>
  )
}

export default Footer;