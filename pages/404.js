import Lottie from 'react-lottie'
import animationData from '../lotties/baby-yoda.json'
import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
      />
      <Link href='/'>
        Home
      </Link>
    </div>
  )
}