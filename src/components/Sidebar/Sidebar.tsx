import styles from "./Sidebar.module.css";
import SidebarNavItem from "./ui/SidebarNavItem/SidebarNavItem.tsx";
import AccountCircleIcon from "../../assets/account_circle.svg?react";
import AddCircleIcon from "../../assets/add_circle.svg?react";
import ForwardIcon from "../../assets/forward.svg?react";
import LogoutIcon from "../../assets/logout.svg?react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <aside className={styles.container}>
      <nav className={styles.nav}>
        <SidebarNavItem
          title={"Личный кабинет"}
          link={"/profile"}
          Icon={AccountCircleIcon}
        />
        <SidebarNavItem
          title={"Новая заявка"}
          link={"/new-request"}
          Icon={AddCircleIcon}
        />
        <SidebarNavItem
          title={"Отправленные заявки"}
          link={"/requests"}
          Icon={ForwardIcon}
        />
      </nav>
      <button className={styles.logout} onClick={handleLogout}>
        <LogoutIcon />
      </button>
    </aside>
  );
}

export default Sidebar;
