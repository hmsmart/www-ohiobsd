import styles from "../styles/Home.module.css";

const buyBSD = () => {
  return (
    <div className={styles.scrollContainer}>
      <div id={styles.pageTitle}>Buy BSD.</div>
      <div id={styles.pageParagraph}>
        We only accept precious metals and aluminum cans for payment.
      </div>
    </div>
  );
};

export default buyBSD;
