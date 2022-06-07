import { Button, ButtonGroup, Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GrClose } from "react-icons/gr";
import styles from "./settingsSidebar.module.css";
import ETTMSText from "/public/locals";
function SettingsSidebar(props) {
  const { locale, asPath } = useRouter();

  return (
    <div className={styles["settingsSidebar-wrapper"]}>
      <div className={styles["settingsSidebar-header"]}>
        <div>{ETTMSText[locale].settingsTab.settingsTabTitle}</div>
        <div>
          <GrClose
            className={styles["settingsSidebar-close-btn"]}
            onClick={props.onClose}
          />
        </div>
      </div>
      <Divider />
      <div>
        <h4 style={{ textAlign: "center" }}>
          {ETTMSText[locale].settingsTab.settingsTabLanguagePreferenceTitle}
        </h4>

        <ButtonGroup
          size="medium"
          aria-label="medium button group"
          className={styles["settingsSidebar-translation-btn-group"]}
        >
          <Link activeClassName={locale === "en"} href={asPath} locale="en">
            <Button variant={locale === "en" ? "contained" : "outlined"} size="small">
              {
                ETTMSText[locale].settingsTab
                  .settingsTabLanguagePreferenceEnglish
              }
            </Button>
          </Link>
          <Link activeClassName={locale === "jp"} href={asPath} locale="jp">
            <Button variant={locale === "jp" ? "contained" : "outlined"}>
              {ETTMSText[locale].settingsTab.settingsTabLanguagePreferenceJapan}
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default SettingsSidebar;
