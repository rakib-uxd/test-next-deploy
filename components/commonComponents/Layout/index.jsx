// import styles from "../../styles/Home.module.css";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./layout.module.css";
import LoginHeader from "../../welcomeComponents/LoginHeader";
export default function Layout({ children }) {
  return (
    <>
      <div className={styles[`main-body-wrapper`]}>
        <Sidebar />
        <div className={styles[`main-body`]}>
          <LoginHeader />
          {/* <Header /> */}
          {children}
        </div>
      </div>
    </>
  );
}
