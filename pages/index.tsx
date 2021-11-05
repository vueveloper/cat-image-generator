import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cat Image Generator</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h1 className={styles.title}>Cat Image Generator</h1>

      <main className={styles.main}>
        <div className={styles.card}>
          <img
            src="https://cataas.com/cat/cute"
            alt="cat-image"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
