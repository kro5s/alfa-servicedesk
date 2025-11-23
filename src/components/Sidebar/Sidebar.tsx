import styles from "./Sidebar.module.css";
import SidebarNavItem from "./ui/SidebarNavItem/SidebarNavItem.tsx";
import AccountCircleIcon from "../../assets/account_circle.svg?react";
import AddCircleIcon from "../../assets/add_circle.svg?react";
import ForwardIcon from "../../assets/forward.svg?react";
import LogoutIcon from "../../assets/logout.svg?react";
import MailIcon from "../../assets/mail.svg?react";
import ListIcon from "../../assets/list.svg?react";
import ArchiveIcon from "../../assets/archive.svg?react";
import StarIcon from "../../assets/star.svg?react";
import CheckboxIcon from "../../assets/check_box.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import type { Role } from "../../types/types.ts";

function Sidebar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role") as Role;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
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
          isVisible={role === 'user'}
        />
        <SidebarNavItem
          title={"Отправленные заявки"}
          link={"/requests"}
          Icon={ForwardIcon}
          isVisible={role === 'user'}
        />
        <SidebarNavItem
          title={"Аналитика"}
          link={"/analytics"}
          Icon={StarIcon}
          isVisible={role === 'aho'}
        />
        <SidebarNavItem
          title={"Прикрепленные заявки"}
          link={"/requests"}
          Icon={ListIcon}
          isVisible={['executor', 'aho'].includes(role)}
        />
        <SidebarNavItem
          title={"Одобренные заявки"}
          link={"/accepted-requests"}
          Icon={CheckboxIcon}
          isVisible={role === 'aho'}
        />
        <SidebarNavItem
          title={"Архив"}
          link={"/archive"}
          Icon={ArchiveIcon}
          isVisible={['executor', 'aho'].includes(role)}
        />
      </nav>

      <div className={styles.bottom}>
        <NavLink className={clsx(styles.bottomItem, styles.mail)} to="/mail">
          <MailIcon />
        </NavLink>
        <button className={clsx(styles.bottomItem, styles.logout)} onClick={handleLogout}>
          <LogoutIcon />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
