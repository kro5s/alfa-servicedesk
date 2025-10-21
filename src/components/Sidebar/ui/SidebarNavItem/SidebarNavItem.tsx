import styles from "./SidebarNavItem.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import type { FC } from "react";
import { Tooltip } from "@alfalab/core-components/tooltip";

function SidebarNavItem({
  title,
  link,
  Icon,
}: {
  title: string;
  link: string;
  Icon: FC;
}) {
  return (
    <Tooltip content={title} position={"right"} onOpenDelay={600}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          clsx(styles.iconButton, {
            [styles.active]: isActive,
          })
        }
      >
        <Icon />
      </NavLink>
    </Tooltip>
  );
}

export default SidebarNavItem;
