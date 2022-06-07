import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/commonComponents/Layout";
// import newsContent from "../../public/locals";
import styles from "./home.module.css";
import ETTMSText from "/public/locals";

const Home = () => {
  const { locale, locales, defaultLocale } = useRouter();
  console.log(locale, locales, defaultLocale);
  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Layout>
          <div className={styles[`home-wrapper`]}>
            <h1>{ETTMSText[locale].homePage.homePageTitle}</h1>
            

            {/* <p> {newsContent[locale].title}</p>
          <p> {newsContent[locale].content[0].title}</p> */}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Home;