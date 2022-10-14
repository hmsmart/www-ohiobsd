import Head from 'next/head';
import Navbar from './Navbar';
import styles from "../styles/Home.module.css";

const Wrapper = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ohio BSD</title>
        <meta name="description" content="Cuyahoga Falls only BSD center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      {children}

      <div className={styles.footer}>
        <a>Powered by the grid on 17th street 🏠</a>
      </div>
    </>
  );
};

export default Wrapper;

