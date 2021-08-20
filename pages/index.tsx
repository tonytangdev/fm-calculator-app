import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Calculator } from '../components/Calculator'
import styles from '../styles/Home.module.css'
import LogoSVG from '../public/logo.svg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
        <meta name="description" content="Frontend Mentor | Tip calculator app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image src={LogoSVG} alt="logo"></Image>
        </div>
        <Calculator />
      </main>
    </div>
  )
}

export default Home
