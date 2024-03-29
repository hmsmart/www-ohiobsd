import { useState } from "react";
import styles from "../styles/Home.module.css";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const postReq = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
      date: today.toUTCString(),
    }

    console.log(postReq)
    try {
      // const data = await fetch("https://www.jsonbateman.com")
      // const jsonData = await data.json();

      const data = await fetch("https://www.jsonbateman.com/ohbsd_contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postReq)
      })
      const jsonData = await data.json()

      console.log(jsonData)
      if (jsonData.status === 200) {
        setSuccess(true);
      }

    } catch (err) {
      console.log(err)
    }

  }
  return (
    <div className={styles.scrollContainer}>
      <div id={styles.pageTitle}>Contact Us</div>
      <div id={styles.pageParagraph}>
        Fill out the form below to contact Ohio BSD and someone will get back to you.
      </div>
      <div className={styles.container}>
        <form
          onSubmit={(e) => submitForm(e)}
          method="POST"
          className={styles.formContainer}>
          <div className={styles.inputs}>
            <span className={styles.formSubtitles}>Name</span>
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              placeholder="Full name"
            />
            <span className={styles.formSubtitles}>Email</span>
            <input
              className={styles.inputForm}
              type="makethisemail"
              name="email"
              placeholder="Email"
            />
            <span className={styles.formSubtitles}>Phone Number</span>
            <input
              className={styles.inputForm}
              type="phone"
              name="phone"
              placeholder="Phone number"
            />
          </div>
          <span className={styles.formSubtitles}>Message</span>
          <div id={styles.message}>
            <textarea
              className="pl-2"
              name="message"
            />
          </div>
          {success ? (
            <div className={`${styles.successBtn} rounded border border-white text-center success-btn bg-green-700 text-white`} type="success">
              Message Sent!
            </div>
          ) : (
            <button className="border rounded border-white bg-red-700 hover:bg-red-500 text-white" type="submit" href="/">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
