import Link from 'next/link'
import Lottie from 'react-lottie'
import animationData from '../lotties/baby-yoda'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import {
  getAllCharacterData,
} from '../lib/star-wars'

export const getStaticProps = async () => {
  const profileData = await getAllCharacterData();

  return {
    props: {
      profiles: profileData,
    }
  }
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function Home({ profiles }) {
  const names = profiles.map(profile => {
    return {
      label: profile.name,
      id: profile.url.split('/')[5].toString()
    }
  });

  return (
    <Layout home names={names}>
      <main className={styles.main}>
        <section className={styles.banner}>
          <h2 className={styles.title}>
            Welcome to Charactergram <br /> The Star Wars Edition
          </h2>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
        </section>
        <p className={styles.description}>
          Get started by searching{' '}
          or browse for your favorites.
        </p>

        <div className={styles.grid}>
          {profiles.map(profile => (
            <Link href={`/star-wars/people/${profile.url.split('/')[5]}`} key={profile.url}>
              <div className={styles.card} >
                <h4 className={styles.name}>{profile.name}</h4>
                <p>&rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
