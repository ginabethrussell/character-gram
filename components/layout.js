import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import Searchbar from './searchbar'
import IconLinks from './iconLinks'

export default function Layout({ children, home, names }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Charactergram</title>
        <meta name="description" content="Profile pages of your favorite characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Charactergram</h1>
        {home &&
          <Searchbar names={names} />
        }
        <IconLinks />
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {home && (
        <footer className={styles.footer}>
          <p>
            Lottie Animation by
            <a href="https://lottiefiles.com/user/262773"> Sam Salkin</a>
          </p>
        </footer>
      )
      }
    </div>
  )
}