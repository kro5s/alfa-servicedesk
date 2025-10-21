import { Textarea } from "@alfalab/core-components/textarea";
import styles from "./RequestChatInput.module.css";
import { ActionButton } from "@alfalab/core-components/action-button";
import { PaperAirplaneMIcon } from "@alfalab/icons-glyph/PaperAirplaneMIcon";

function RequestChatInput() {
  return (
    <div className={styles.container}>
      <Textarea minRows={6} block />
      <ActionButton icon={<PaperAirplaneMIcon />} />
    </div>
  );
}

export default RequestChatInput;
