import styles from "./SidebarNavItem.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import type { FC } from "react";
import { Tooltip } from "@alfalab/core-components/tooltip";

function SidebarNavItem({
  title,
  link,
  Icon,
  isVisible = true
}: {
  title: string;
  link: string;
  Icon: FC;
  isVisible?: boolean;
}) {
  return isVisible ? (
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
  ) : null;
}

export default SidebarNavItem;
