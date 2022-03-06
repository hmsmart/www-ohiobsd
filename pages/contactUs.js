import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const contactUs = () => {
  return (
    <div className={styles.scrollContainer}>
      <Navbar />
      <div id={styles.pageTitle}>Send it -----&gt;</div>
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <div className={styles.inputs}>
            <span className={styles.formSubtitles}>Name</span>
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              placeholder="Full name"
            ></input>
            <span className={styles.formSubtitles}>Email</span>
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              placeholder="Email"
            ></input>
            <span className={styles.formSubtitles}>Phone Number</span>
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              placeholder="Phone number"
            ></input>
          </div>
          <span className={styles.formSubtitles}>Message</span>
          <div id={styles.message}>
            <textarea rows="8" cols="33"></textarea>
          </div>
          <button type="submit" href="/">
            Submit
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <a>Powered by the grid on 17th street 🏠</a>
      </div>
    </div>
  );
};

export default contactUs;
