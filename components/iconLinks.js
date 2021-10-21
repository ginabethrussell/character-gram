import { FaHome } from "react-icons/fa"
import Link from 'next/link'
import styles from "./iconLinks.module.css"

export default function IconLinks() {
  return (
    <div className={styles.iconWrapper}>
      <Link href="/">
        <a>
          <FaHome className={styles.homeIcon} />
        </a>
      </Link>
    </div>
  )
}