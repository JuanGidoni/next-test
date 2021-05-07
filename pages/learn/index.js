import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from '../../atoms/Link'
import { FaRegMoon, FaRegSun, FaCopyright } from 'react-icons/fa'

export default function Learn({ toggleTheme, theme }) {

  return (
    <div className={styles.container}>
    <Head>
      <title>Juan Ignacio Gidoni | Lean with Me</title>
      <meta name="description" content="My name is Juan Ignacio Gidoni, Fullstack Developer and Multimedia Designer. Welcome to my portfolio!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Learn Code 
        <span onClick={toggleTheme} className={styles.toggler}>
          {theme === 'light' ?
              <FaRegMoon />
            :
              <FaRegSun />
          }
        </span>
      </h1>

      <p className={styles.description}>
        This area is under construction
      </p>
      
      <div className={styles.routing}>
          <Link href='/aboutme'>Previous</Link>
          <Link href='/'>Home</Link>
      </div>

      <div className={styles.grid}>
        <div
          className={styles.card}
        >
            <h2>Learn HTML</h2>
            <p>Mentoring HTML.</p>
        </div>

        <div
          className={styles.card}
        >
            <h2>Learn CSS</h2>
            <p>Mentoring CSS.</p>
        </div>

        <div
          className={styles.card}
        >
            <h2>Learn JS</h2>
            <p>Mentoring JS.</p>
        </div>

        <div
          className={styles.card}
        >
            <h2>Learn React</h2>
            <p>Mentoring React.</p>
        </div>
      </div>
    </main>

    <footer className={styles.footer}>
      <div className={styles.copyright}>
      <FaCopyright />
      <p className={styles.footerCopy}>Juan Ignacio Gidoni 2021</p>
      </div>
    </footer>
  </div>
  )
}
