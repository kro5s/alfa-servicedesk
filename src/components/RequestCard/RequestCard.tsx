import styles from "./RequestCard.module.css";
import { type RequestPreview } from "../../types/types.ts";
import RequestStatus from "../RequestStatus/RequestStatus.tsx";
import RequestPriority from "../RequestPriority/RequestPriority.tsx";
import { Link } from "react-router-dom";
import clsx from "clsx";

const formatter = Intl.DateTimeFormat("ru-RU");

function RequestCard({
  id,
  title,
  description,
  status,
  priority,
  created_at,
  withMeta,
  isShortened,
}: RequestPreview & {
  withMeta?: boolean;
  isShortened?: boolean;
}) {
  return (
    <Link to={`/requests/${id}`}>
      <div className={clsx(styles.container, {
        [styles.shortened]: isShortened,
      })}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.id}>#{id}</span>
          </div>
          <RequestStatus status={status} />
        </div>
        {!isShortened && (
          <>
            <p className={styles.description}>{description}</p>
            {!withMeta && (
              <div className={styles.header}>
                <div className={styles.timestamp}>
                  {formatter.format(new Date(created_at))}
                </div>
                <RequestPriority priority={priority} />
              </div>
            )}
            {withMeta && (
              <div className={styles.meta}>
                <div>Создатель: Иван Иванов</div>
                <div>
                  Дата создания: {formatter.format(new Date(created_at))}
                </div>
                <div>
                  Дедлайн по заявке:{" "}
                  {formatter.format(
                    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                  )}
                </div>
                <RequestPriority priority={priority} />
              </div>
            )}
          </>
        )}
      </div>
    </Link>
  );
}

export default RequestCard;
