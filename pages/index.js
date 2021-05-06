import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaLinkedin, FaRegEye, FaBook, FaUserGraduate, FaToggleOff, FaToggleOn, FaRegMoon, FaRegSun } from 'react-icons/fa'
import Link from '../atoms/Link'

export default function Home({ toggleTheme, theme }) {
  const router = useRouter()

  const hrefToComponent = (event) => {
    event.preventDefault()
    router.push(href)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Juan Ignacio Gidoni | Portfolio</title>
        <meta name="description" content="My name is Juan Ignacio Gidoni, Fullstack Developer and Multimedia Designer. Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Juan Ignacio Gidoni
        </h1>

        <p className={styles.description}>
          Fullstack Developer && Multimedia Designer
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/juangidoni/"
            target="_BLANK"
            className={styles.card}
          >
            <div className={styles.courner}>
              <FaLinkedin />
            </div>
            <h2>Linkedin</h2>
            <p>Find more information about me and contact me directly.</p>
          </a>

          <Link
            href="/portfolio"
            target="_BLANK"
            className={styles.card}
          >
            <div className={styles.courner}>
              <FaRegEye />
            </div>
            <h2>Latest works</h2>
            <p>Watch my recent project where I worked before.</p>
          </Link>

          <Link
            href="/aboutme"
            className={styles.card}
          >
            <div className={styles.courner}>
              <FaUserGraduate />
            </div>
            <h2>About me</h2>
            <p>Know more about me. What I do and what I like to do.</p>
          </Link>

          <Link
            href="/learn"
            className={styles.card}
          >
            <div className={styles.courner}>
              <FaBook />
            </div>
            <h2>Learn with me</h2>
            <p>
              Start learning code with me. I will teach you in the way I can.
            </p>
          </Link>
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
        <button onClick={toggleTheme} className={styles.toggler}>
          {theme === 'light' ?
              <FaRegMoon />
            :
              <FaRegSun />
          }
        </button>
      </footer>
    </div>
  )
}
