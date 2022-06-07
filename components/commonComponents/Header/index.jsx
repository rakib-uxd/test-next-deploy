import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./header.module.css";
const Header = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  console.log(locale, locales, defaultLocale);
  return (
    <div className={styles[`header`]}>
      <h4>
        <Link activeClassName={locale === "en"} href={asPath} locale="en">
          EN
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link activeClassName={locale === "jp"} href={asPath} locale="jp">
          JP
        </Link>
        &nbsp;&nbsp;&nbsp;
      </h4>
    </div>
  );
};

export default Header;
