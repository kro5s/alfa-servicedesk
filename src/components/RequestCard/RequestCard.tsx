import styles from "./RequestCard.module.css";
import { type RequestPreview } from "../../types/types.ts";
import RequestStatus from "../RequestStatus/RequestStatus.tsx";
import RequestPriority from "../RequestPriority/RequestPriority.tsx";
import { Link } from "react-router-dom";

const formatter = Intl.DateTimeFormat("ru-RU");

function RequestCard({
  id,
  title,
  description,
  status,
  priority,
  created_at,
}: RequestPreview) {
  return (
    <Link to={`/requests/${id}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.id}>#{id}</span>
          </div>
          <RequestStatus status={status} />
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.header}>
          <div className={styles.timestamp}>
            {formatter.format(new Date(created_at))}
          </div>
          <RequestPriority priority={priority} />
        </div>
      </div>
    </Link>
  );
}

export default RequestCard;
