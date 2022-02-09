import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import MainPage from "./mainPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ohio BSD</title>
        <meta name="description" content="Cuyahoga Falls only BSD center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>OhioBSD.cloud</h1>
        <h2>17th Streets #1 BSD VPS Provider</h2>
      </main>

      <MainPage />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by the boys on 18th
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
