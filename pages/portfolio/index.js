import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from '../../atoms/Link'
import { FaRegMoon, FaRegSun, FaCopyright } from 'react-icons/fa'

export default function Portfolio({ toggleTheme, theme }) {

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
        <span onClick={toggleTheme} className={styles.toggler}>
          {theme === 'light' ?
              <FaRegMoon />
            :
              <FaRegSun />
          }
        </span>
      </h1>

      <p className={styles.description}>
        This is my portfolio. Check latest works below.
      </p>
      
      <div className={styles.routing}>
          <Link href='/'>Previous</Link>
          <Link href='/aboutme'>Next</Link>
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/JuanGidoni/TestMeLi"
          target="_BLANK"
          className={styles.card}
        >
          <h2>MercadoLibre Sales Team</h2>
          <p>Building the most viewed page of MercadoLibre with React and Node</p>
        </a>

        <a
          href="https://github.com/JuanGidoni/triviex-build"
          target="_BLANK"
          className={styles.card}
        >
          <h2>Triviex</h2>
          <p>Builded a React App for a educational campus.</p>
        </a>

        <a
          href="https://github.com/JuanGidoni/sheltr"
          target="_BLANK"
          className={styles.card}
        >
          <h2>Sheltr</h2>
          <p>Builded with HTML, CSS and Bootstrap</p>
        </a>

        <a
          href="https://github.com/JuanGidoni/weather-flow"
          target="_BLANK"
          className={styles.card}
        >
          <h2>WeatherFlow</h2>
          <p>
           Builded a React App for forecast data.
          </p>
        </a>
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
