import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div id={styles.navbar}>
      <Link href="/">
        <div id={styles.BSDLogoText}></div>
      </Link>
      <ul id={styles.navigation}>
        <Link href="whyBSD">
          <li className={styles.navbarText}> Why BSD?</li>
        </Link>
        <Link href="buyBSD">
          <li className={styles.navbarText}> Buy BSD.</li>
        </Link>
        <Link href="contactUs">
          <li className={styles.navbarText}> Contact Us!</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
