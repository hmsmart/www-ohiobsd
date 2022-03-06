import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";

const WhyBSD = () => {
  return (
    <div className={styles.scrollContainer}>
      <Navbar />
      <div id={styles.pageTitle}>Why BSD?</div>
      <div id={styles.pageParagraph}>
        <span>Berkeley Software Distribution</span> or <span>BSD</span> is a
        Unix based OS. It offers all the speed of linux systems while not being
        updated by an army of giga nerds every 5 seconds and for every iteration
        of idea that goes through those nerds heads. <br></br> <br></br>
        BSD is known for it&apos;s dependability, security, and speed. OhioBSD has
        both freeBSD and openBSD available for use.
        <br></br>
        <br></br>
        Our servers run on 1Gb optical fiber.
      </div>
      <div className={styles.footer}>
        <a>Powered by the grid on 17th street 🏠</a>
      </div>
    </div>
  );
};

export default WhyBSD;
