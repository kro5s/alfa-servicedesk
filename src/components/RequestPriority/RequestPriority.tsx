import clsx from "clsx";
import styles from "./RequestPriority.module.css";
import PriorityIcon from "../../assets/priority.svg?react";
import type { RequestPriorityType } from "../../types/types.ts";

const priorityNameMappings: Record<RequestPriorityType, string> = {
  low: "Низкий",
  medium: "Средний",
  high: "Высокий",
};

function RequestPriority({ priority }: { priority: RequestPriorityType }) {
  return (
    <div className={styles.container}>
      <PriorityIcon
        className={clsx(styles.priorityIcon, {
          [styles.low]: priority === "low",
          [styles.medium]: priority === "medium",
          [styles.high]: priority === "high",
        })}
      />
      <span className={styles.priority}>
        {priorityNameMappings[priority]} приоритет
      </span>
    </div>
  );
}

export default RequestPriority;
