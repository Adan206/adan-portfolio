import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adan's Portfolio</title>
        <meta
          name='description'
          content='A portfolio of software developer work.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Adan Abbi</h1>
        <p className={styles.description}>A Portfolio</p>

        <div className={styles.grid}>
          <a
            href='https://github.com/Adan206'
            className={styles.card}
            rel='noreferrer'
            target='_blank'
          >
            <h2>GitHub</h2>
            <p>Welcome to my dev world</p>
          </a>

          <a
            href='https://www.linkedin.com/in/adan-abbi-57391848/'
            className={styles.card}
            rel='noreferrer'
            target='_blank'
          >
            <h2>LinkedIn</h2>
            <p>go from a web user to a web creator</p>
          </a>

          <a
            href='https://adan206.github.io/g-blog/'
            className={styles.card}
            rel='noreferrer'
            target='_blank'
          >
            <h2>Blog</h2>
            <p>Sharing my dev experience with the world</p>
          </a>

          {/* <a
            href='https://vandivier.github.io/vanilla-flat-white/'
            className={styles.card}
            rel='noreferrer'
            target='_blank'
          >
            <h2>Vanilla Flat White</h2>
            <p>
              An assortment of microprojects in HTML, CSS, and Vanilla
              JavaScript.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>Powered by Developers Like You!</footer>
    </div>
  );
};

export default Home;
