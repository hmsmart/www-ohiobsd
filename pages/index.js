import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ohio BSD</title>
        <meta name="description" content="Cuyahoga Falls only BSD center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
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
            <div className={styles.pictureBox} id={styles.pictureBox1}></div>
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.pictureBox} id={styles.pictureBox2}></div>
            <div className={styles.textDescription}>
              This is what peak performance looks like.
            </div>
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.textDescription}>
              Once you&apos;ve had a taste of greatness, you&apos;ll never use anything
              else.
            </div>
            <div className={styles.pictureBox} id={styles.pictureBox3}></div>
          </div>
        </main>
        <div className={styles.footer}>
          <a>Powered by the grid on 17th street 🏠</a>
        </div>
      </header>
    </div>
  );
}
