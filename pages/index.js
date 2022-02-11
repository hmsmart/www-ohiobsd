import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPage from "./mainPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ohio BSD</title>
        <meta name="description" content="Cuyahoga Falls only BSD center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div id={styles.navbar}>
          <div id={styles.BSDLogoText}></div>
          <ul id={styles.navigation}>
            <li className={styles.navbarText}> Why BSD?</li>
            <li className={styles.navbarText}> Why Ohio?</li>
            <li className={styles.navbarText}> How did I get here?</li>
          </ul>
        </div>
        <main id={styles.main}>
          <div id={styles.titleContainer}>
            <div id={styles.BSDLogoFlag}></div>
          </div>
          <div id={styles.title}>Serving servers since 2022.</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.textDescription}>
              Take a look at some of the finest server engineering that money
              can buy.
            </div>
            <div id={styles.pictureBox1}></div>
          </div>

          <div className={styles.descriptionContainer}>
            <div id={styles.pictureBox2}></div>
            <div className={styles.textDescription}>
              This is what peak performance looks like.
            </div>
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.textDescription}>
              Once you've had a taste of greatness, you'll never use anything
              else.
            </div>
            <div id={styles.pictureBox3}></div>
          </div>
        </main>
      </header>
      <MainPage />

      <footer className={styles.footer}>
        <a>Powered by the boys on 18th 🏠</a>
      </footer>
    </div>
  );
}
