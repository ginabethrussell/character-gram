import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/layout.module.css';
import Searchbar from './searchbar';
import IconLinks from './iconLinks';

export default function Layout({ children, home }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Charactergram</title>
        <meta name="description" content="Profile pages of your favorite characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Charactergram</h1>
        <Searchbar />
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
      <footer className={styles.footer}>
        {home ? (
          <p>
            Lottie Animation by
            <a href="https://lottiefiles.com/user/262773"> Sam Salkin</a>
          </p>) : (
          <p>
            Image by
            <a href="https://pixabay.com/users/wanderercreative-855399/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">
              {" "}Stephanie Edwards
            </a> from
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=973460">
              {" "}Pixabay
            </a>
          </p>
        )
        }
      </footer>
    </div>
  );
}