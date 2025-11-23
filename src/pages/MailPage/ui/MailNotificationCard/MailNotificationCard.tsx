import type { MailNotification, MailNotificationStatus } from "./types.ts";
import styles from "./MailNotificationCard.module.css";
import {
  StatusBadge,
  type StatusBadgeProps,
} from "@alfalab/core-components/status-badge";
import { Link } from "react-router-dom";

const viewStatusMappings: { [_ in MailNotificationStatus]: StatusBadgeProps['view'] } = {
  done: 'positive-checkmark',
  accepted: 'neutral-operation',
  sent: 'neutral-information',
  rejected: 'negative-cross',
  info: 'neutral-information',
}

function MailNotificationCard({ title, description, status }: MailNotification) {
  return (
    <Link to={'/requests/78543'} className={styles.container}>
      <div className={styles.top}>
        <StatusBadge view={viewStatusMappings[status]} size={20} />
        <span className={styles.title}>{title}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </Link>
  );
}

export default MailNotificationCard;