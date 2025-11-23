import { ModalResponsive } from "@alfalab/core-components/modal"
import type { ComponentProps } from "react";
import styles from "./NewRequestSuccessModal.module.css";
import { Link } from "react-router-dom";

function NewRequestSuccessModal(props: ComponentProps<typeof ModalResponsive>) {
  return (
    <ModalResponsive className={styles.modal} size={"l"} {...props}>
      <ModalResponsive.Header hasCloser={true} />
      <ModalResponsive.Content className={styles.content}>
        <div className={styles.title}>Благодарим за подачу заявки!</div>
        <p className={styles.text}>Ваша заявка под номером <Link to='/requests/12345'>ID #12345</Link> принята. При обновлении статуса заявки, вам будет отправлено письмо.<br/><br/> Если сообщение не пришло - напишите в поддержку.</p>
      </ModalResponsive.Content>
      <ModalResponsive.Footer />
    </ModalResponsive>
  );
}

export default NewRequestSuccessModal;