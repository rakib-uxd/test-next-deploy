import { useRouter } from "next/router";
import React from "react";
import styles from "./loginFooter.module.css";
import ETTMSText from "/public/locals";

function LoginFooter() {
  const { locale } = useRouter();

  return (
    <div className={styles["loginFooter-wrapper"]}>
      <p>{ETTMSText[locale].footer.footerTitle}</p>
    </div>
  );
}

export default LoginFooter;
