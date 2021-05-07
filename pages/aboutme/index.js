import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from '../../atoms/Link'
import { FaRegMoon, FaRegSun, FaCopyright } from 'react-icons/fa'

export default function Aboutme({ toggleTheme, theme }) {

  return (
    <div className={styles.container}>
    <Head>
      <title>Juan Ignacio Gidoni | About Me</title>
      <meta name="description" content="My name is Juan Ignacio Gidoni, Fullstack Developer and Multimedia Designer. Welcome to my portfolio!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        About Me
        <span onClick={toggleTheme} className={styles.toggler}>
          {theme === 'light' ?
              <FaRegMoon />
            :
              <FaRegSun />
          }
        </span>
      </h1>

      <p className={styles.description}>
        Know me better
      </p>
      
      <div className={styles.routing}>
          <Link href='/portfolio'>Previous</Link>
          <Link href='/learn'>Next</Link>
      </div>

      <div className={styles.grid}>
        <div
          className={styles.card}
        >
          <h2>Where I from?</h2>
          <p>Mar del Plata, Buenos Aires, Argentina.</p>
        </div>

        <div
          className={styles.card}
        >
          <h2>What I like to do?</h2>
          <p>Play videogames, basketball, cooking and learn new languages.</p>
        </div>

        <div
          className={styles.card}
        >
          <h2>What I know until today?</h2>
          <p>Certified React.js and going to learn Vue.js</p>
        </div>

        <div
          className={styles.card}
        >
          <h2>What kind of projects do I like?</h2>
          <p>
            The ones that motivate me to learn more and go forward.
          </p>
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