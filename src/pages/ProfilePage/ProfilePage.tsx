import styles from "./ProfilePage.module.css";
import Profile from "./ui/Profile/Profile.tsx";
import { Input } from "@alfalab/core-components/input";

function ProfilePage() {
  return (
    <section className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.main}>
        <Profile />
        <div className={styles.infoGrid}>
          <Input
            className={styles.infoCell}
            placeholder={"Иван"}
            label={<span className={styles.infoCellLabel}>Имя</span>}
            labelView={"outer"}
            disabled
          />
          <Input
            className={styles.infoCell}
            placeholder={"Иванов"}
            label={<span className={styles.infoCellLabel}>Фамилия</span>}
            labelView={"outer"}
            disabled
          />
          <Input
            className={styles.infoCell}
            placeholder={"Рабочее место Иванова"}
            label={<span className={styles.infoCellLabel}>Рабочее место</span>}
            labelView={"outer"}
            disabled
          />
          <Input
            className={styles.infoCell}
            placeholder={"Разработчик"}
            label={<span className={styles.infoCellLabel}>Должность</span>}
            labelView={"outer"}
            disabled
          />
          <Input
            className={styles.infoCell}
            placeholder={"ivanivanov@gmail.com"}
            label={<span className={styles.infoCellLabel}>Email</span>}
            labelView={"outer"}
            disabled
          />
          <Input
            className={styles.infoCell}
            placeholder={"+7 922 478 5338"}
            label={<span className={styles.infoCellLabel}>Номер телефона</span>}
            labelView={"outer"}
            disabled
          />
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
