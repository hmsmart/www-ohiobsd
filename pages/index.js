import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import server from "../public/server.png"
import bsdLogo from "../public/LogoStuff/bitmap.svg"
import encrypted from "../public/encrypted-icon-green.svg"

export default function Home() {
  return (
    <div>
      <header>
        <main id={styles.main}>
          <div id={styles.titleContainer}>
            <div id={styles.BSDLogoFlag}></div>
          </div>
          <div id={styles.title}>Serving servers since 2022.</div>
          <div className={styles.descriptionContainer}>
            <div className={`mx-8 ${styles.textDescription}`}>
              OhioBSD covers all of your server needs, from DNS to hosting to storage. 
            </div>
            <Image
              src={server}
              width={200}
              height={300}
            />
          </div>

          <div className={styles.descriptionContainer}>
            <Image
              src={bsdLogo}
              width={200}
              height={200}
            />
            <div className={`mx-8 ${styles.textDescription}`}>
              At OhioBSD, our servers run and deliver the Berkeley Software Distribution Operating System.
            </div>
          </div>

          <div className={styles.descriptionContainer}>
            <div className={`mx-8 ${styles.textDescription}`}>
              Code comfortably knowing BSD has a history of providing secure services for users.
            </div>
            <Image
              src={encrypted}
              width={250}
              height={300}
            />
          </div>
        </main>
      </header>
    </div>
  );
}
