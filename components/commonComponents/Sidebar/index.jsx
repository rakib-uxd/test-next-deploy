import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaGem,
  FaHeart,
  FaTable,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import styles from "./sidebar.module.css";

// import "./sidebarMain.css";

const Sidebar = () => {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  // const { pathname, locale, locales, defaultLocale, asPath } = useRouter();
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(router.pathname);
  console.log(selectedItem);
  const matches = useMediaQuery("(max-width:1150px)");
  console.log(matches);
  useEffect(() => {
    if (matches) {
      setCollapsedSidebar(true);
    } else {
      setCollapsedSidebar(false);
    }
  }, [matches]);

  const logout = () => {
    router.push("/");
    // In future logout with next auth
  };

  return (
    <div id="sidebar">
      <ProSidebar
        style={{ backgroundColor: "#fff" }}
        collapsed={collapsedSidebar}
        // className={styles[`prosidebar-main`]}
      >
        <div className={styles['sidebar-header-wrapper']}>
          <SidebarHeader onClick={() => setCollapsedSidebar((prev) => !prev)}>
            <h4 className={styles[`sideabar-header`]}>ETTMS</h4>
            <h2 className={styles[`sidebar-toggle-btn`]}>
              {collapsedSidebar == true ? (
                <FaArrowCircleRight />
              ) : (
                <FaArrowCircleLeft />
              )}
            </h2>
          </SidebarHeader>
        </div>
        <SidebarContent style={{ height: "100%" }}>
          {/* <Link href="/dashboard"> */}

          <Menu iconShape="circle" popperArrow={true}>
            <div
              className={
                selectedItem === "/dashboard"
                  ? `${styles[`active-side-menu`]}`
                  : null
              }
            >
              <Tooltip
                title="Dashboard"
                placement="right"
                arrow
                PopperProps={{
                  disablePortal: !collapsedSidebar,
                }}
              >
                <MenuItem
                  icon={<FaGem className={styles[`sidebar-menu-icon`]} />}
                  onClick={
                    () => router.push("/dashboard")
                    // router.push("/dashboard", "/dashboard", locale = { locale })
                  }
                >
                  Dashboard
                </MenuItem>
              </Tooltip>
            </div>
            <div
              className={
                selectedItem === "/other"
                  ? `${styles[`active-side-menu`]}`
                  : null
              }
            >
              <Tooltip
                title="Other"
                arrow
                placement="right"
                PopperProps={{
                  disablePortal: !collapsedSidebar,
                }}
                //   PopperProps={{
                //     disablePortal: true,
                //   }}
                //   open={false}
              >
                <MenuItem
                  icon={<FaGem />}
                  onClick={() => router.push("/other")}
                  // onClick={() => router.push("/other", "/other", locale = { locale })}
                >
                  Other
                </MenuItem>
              </Tooltip>
            </div>
            <div
              className={
                selectedItem === "/table"
                  ? `${styles[`active-side-menu`]}`
                  : null
              }
            >
              <Tooltip
                title="table"
                arrow
                placement="right"
                PopperProps={{
                  disablePortal: !collapsedSidebar,
                }}
                //   PopperProps={{
                //     disablePortal: true,
                //   }}
                //   open={false}
              >
                <MenuItem
                  icon={<FaTable />}
                  onClick={() => router.push("/table")}
                >
                  Table
                </MenuItem>
              </Tooltip>
            </div>

            <SubMenu
              title="Components"
              icon={<FaHeart />}
              defaultOpen={
                selectedItem === "/subcompone" || selectedItem === "/subcomptwo"
                  ? true
                  : false
              }
            >
              <div>
                <h6>COMPONENTS-LIST</h6>
                <div
                  className={
                    selectedItem === "/subcompone"
                      ? `${styles[`active-side-menu`]}`
                      : null
                  }
                >
                  <MenuItem onClick={() => router.push("/subcompone")}>
                    Sub-comp 1
                  </MenuItem>
                </div>
                <div
                  className={
                    selectedItem === "/subcomptwo"
                      ? `${styles[`active-side-menu`]}`
                      : null
                  }
                >
                  <MenuItem onClick={() => router.push("/subcomptwo")}>
                    Sub-comp 2
                  </MenuItem>
                </div>
              </div>
            </SubMenu>
          </Menu>

          <SidebarFooter className={styles[`sidebar-footer`]}>
            <Menu
              iconShape="square"
              className={
                collapsedSidebar === false
                  ? [
                      styles["sidebar-footer-menu"],
                      styles["sidebar-footer-menu-open"],
                    ].join(" ")
                  : styles["sidebar-footer-menu"]
              }
            >
              <Tooltip
                title="Log out"
                placement="top"
                arrow
                PopperProps={{
                  disablePortal: false,
                }}
              >
                <span onClick={() => logout()}>
                  <MenuItem icon={<FiLogOut />}>LOG OUT</MenuItem>
                </span>
              </Tooltip>
            </Menu>
          </SidebarFooter>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
