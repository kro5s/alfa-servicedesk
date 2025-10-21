import styles from "./Profile.module.css";
import avatarImage from "../../../../assets/avatar.webp";

function Profile() {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatarImage} alt="" />
      <div className={styles.info}>
        <p className={styles.name}>Иван Иванов</p>
        <p className={styles.email}>ivanivanov@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
