import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const buyBSD = () => {
  return (
    <div className={styles.scrollContainer}>
      <Navbar />
      <div id={styles.pageTitle}>Buy BSD.</div>
      <div id={styles.pageParagraph}>
        We only accept precious metals and aluminum cans for payment.
      </div>
      <div className={styles.footer}>
        <a>Powered by the grid on 17th street 🏠</a>
      </div>
    </div>
  );
};

export default buyBSD;
