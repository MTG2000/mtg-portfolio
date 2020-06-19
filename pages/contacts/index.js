import React from "react";
import styles from "../../components/styles/contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

const Contact = () => {
  return (
    <main className={styles.contact}>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="container py-3 pt-5">
        <h1
          className="display-3 text-primary text-center mt-5 mb-5"
          data-aos="zoom-out"
        >
          Want to Chat ??
        </h1>
        <h2 className="text-white mb-4" data-aos="fade-in" data-aos-delay="500">
          If you have a job offer, a project that you want some help with or
          even if you want to chat with me, don't hesitate to contact me and I
          will answer you as soon as possible .
        </h2>
        <div className="row justify-content-around mt-5">
          <div
            className={`col-lg-7 mb-3 mx-auto row  py-2 ${styles.contactCard}`}
            data-aos="flip-down"
            data-aos-delay="0"
          >
            <FontAwesomeIcon
              icon="envelope"
              className="text-primary  mx-auto h-100"
              size="3x"
            />
            <div className="text-white row  flex-column col-9">
              <p className="text-primary text-left">Email</p>
              <h5>mtg0987654321@gmail.com</h5>
            </div>
          </div>
          <div
            className={`col-lg-7 mb-3 mx-auto row  py-2 ${styles.contactCard}`}
            data-aos="flip-down"
            data-aos-delay="150"
            data-aos-offset="0"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="text-primary mx-auto h-100"
              size="3x"
            />
            <div className="text-white row  flex-column col-9">
              <p className="text-primary text-left">Linkedin</p>
              <h5>
                <a
                  href="https://www.linkedin.com/in/mohamad-taher-ghazal-9b2924187/"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MTG Profile
                </a>
              </h5>
            </div>
          </div>
          <div
            className={`col-lg-7 mb-3 mx-auto row  py-2 ${styles.contactCard}`}
            data-aos="flip-down"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            {" "}
            >
            <FontAwesomeIcon
              icon="mobile-alt"
              className="text-primary h-100 mx-auto"
              size="3x"
            />
            <div className="text-white row  flex-column col-9">
              <p className="text-primary text-left">Phone</p>
              <h5>+963 969737630</h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
