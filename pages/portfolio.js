import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Portfolio = () => {

  return (
    <div className={styles.container}>
    <Head>
      <title>Juan Ignacio Gidoni | Portfolio</title>
      <meta name="description" content="My name is Juan Ignacio Gidoni, Fullstack Developer and Multimedia Designer. Welcome to my portfolio!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Latest Works
      </h1>

      <p className={styles.description}>
        This is my portfolio. Check latest works below.
      </p>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/juangidoni/"
          target="_BLANK"
          className={styles.card}
        >
          <h2>MercadoLibre Sales Team</h2>
          <p>Created with React and Node. Building the most viewed page of MercadoLibre</p>
        </a>

        <a
          href="/portfolio"
          target="_BLANK"
          className={styles.card}
        >
          <h2>Latest works</h2>
          <p>Watch my recent project where I worked before.</p>
        </a>

        <a
          href="/aboutme"
          className={styles.card}
        >
          <h2>About me</h2>
          <p>Know more about me. What I do and what I like to do.</p>
        </a>

        <a
          href="/learn"
          className={styles.card}
        >
          <h2>Learn with me</h2>
          <p>
            Start learning code with me. I will teach you in the way I can.
          </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
  )
}

export default Portfolio