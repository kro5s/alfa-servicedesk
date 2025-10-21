import { Comment } from "@alfalab/core-components/comment";
import styles from "./RequestChatMessage.module.css";
import clsx from "clsx";
import avatar from "../../../../assets/avatar.webp";

function RequestChatMessage({
  message,
  reverted,
}: {
  message: string;
  reverted?: boolean;
}) {
  return (
    <div
      className={clsx(styles.container, {
        [styles.reverted]: reverted,
      })}
    >
      <img className={styles.avatar} src={avatar} alt={"avatar"} />
      <Comment
        className={clsx(styles.comment, {
          [styles.reverted]: reverted,
        })}
      >
        {message}
      </Comment>
    </div>
  );
}

export default RequestChatMessage;
