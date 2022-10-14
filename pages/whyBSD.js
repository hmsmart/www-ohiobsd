import styles from "../styles/Home.module.css";

const WhyBSD = () => {
  return (
    <div className={styles.scrollContainer}>
      <div id={styles.pageTitle}>Why BSD?</div>
      <div id={styles.pageParagraph}>
        <span>Berkeley Software Distribution</span> or <span>BSD</span> is a
        Unix based OS. It offers all the speed of linux systems while keeping your data safe.
        <br></br> <br></br>
        <span>BSD</span> is known for it&apos;s dependability, security, and speed. OhioBSD has
        both freeBSD and openBSD available for use.
        <br></br>
        <br></br>
        Our servers run on 1Gb optical fiber.
      </div>
    </div>
  );
};

export default WhyBSD;
