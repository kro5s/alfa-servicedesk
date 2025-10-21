import styles from "./MyRequestsPage.module.css";
import RequestsList from "./ui/RequestsList/RequestsList.tsx";

function MyRequestsPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Отправленные заявки</h1>
      <RequestsList />
    </section>
  );
}

export default MyRequestsPage;
