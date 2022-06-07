import { Button, Drawer, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import SettingsSidebar from "../SettingsSidebar";
import styles from "./loginHeader.module.css";
import ETTMSText from "/public/locals";
function LoginHeader() {
  const { locale } = useRouter();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  return (
    <div className={styles["LoginHeader-wrapper"]}>
      <p>{ETTMSText[locale].welcomePage.headerTitle}</p>
      <Tooltip
        title={ETTMSText[locale].settingsTab.settingsButtonTooltip}
        placement="bottom"
        arrow
      >
        <Button
          onClick={toggleDrawer("right", true)}
          className={styles["loginHeader-settings-btn"]}
        >
          <FiSettings />
        </Button>
      </Tooltip>

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div>
          <SettingsSidebar onClose={toggleDrawer("right", false)} />
        </div>
      </Drawer>
    </div>
  );
}

export default LoginHeader;
