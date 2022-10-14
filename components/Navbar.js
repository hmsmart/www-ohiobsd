import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import OhioBSDcloud from "../public/LogoStuff/OhioBSDlogoText.svg"

const Navbar = () => {
  return (
    <div className="border-white border-b" id={styles.navbar}>
      <Link href="/" passHref>
        <Image
          className="hover:cursor-pointer"
          alt="OhioBSD.cloud logo text"
          src={OhioBSDcloud}
          width={280}
          height={60}
          />
      </Link>
      <Link href="/whyBSD" passHref>
        <span className={styles.navbarText}>Why BSD?</span>
      </Link>
      <Link href="/contactUs" passHref>
        <span className={styles.navbarText}>Contact Us!</span>
      </Link>
    </div>
  );
};

export default Navbar;
