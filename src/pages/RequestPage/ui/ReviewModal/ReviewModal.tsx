import { Modal } from "@alfalab/core-components/modal";
import styles from "./ReviewModal.module.css";
import {
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";
import { StarMIcon } from "@alfalab/icons-glyph/StarMIcon";
import clsx from "clsx";
import { Textarea } from "@alfalab/core-components/textarea";
import { Button } from "@alfalab/core-components/button";

function ReviewModal(props: ComponentProps<typeof Modal> & { setReviewModalOpened: Dispatch<SetStateAction<boolean>> }) {
  const [currentRate, setCurrentRate] = useState<number>(0);
  const [currentPointerRate, setCurrentPointerRate] = useState<number | null>(null);

  return (
    <Modal className={styles.modal} {...props}>
      <Modal.Header hasCloser>
        <div className={styles.headerContent}>
          {[1, 2, 3, 4, 5].map((rate) => (
            <StarMIcon
              key={rate}
              className={clsx(styles.rate, {
                [styles.active]: rate <= currentRate || (currentPointerRate !== null && rate <= currentPointerRate),
              })}
              onClick={() => setCurrentRate(rate)}
              onMouseEnter={() => setCurrentPointerRate(rate)}
              onMouseLeave={() => setCurrentPointerRate(null)}
            />
          ))}
        </div>
      </Modal.Header>
      <Modal.Content className={styles.content}>
        <Textarea block resize="vertical" minRows={6} />
        <Button onClick={() => props.setReviewModalOpened(false)} size="xxs" view="accent">Отправить</Button>
      </Modal.Content>
    </Modal>
  );
}

export default ReviewModal;
