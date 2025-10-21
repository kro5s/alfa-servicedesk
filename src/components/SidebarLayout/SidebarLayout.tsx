import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.tsx";
import styles from "./Sidebar.module.css";

function SidebarLayout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;
