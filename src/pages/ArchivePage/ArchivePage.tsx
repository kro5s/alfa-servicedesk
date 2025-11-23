import styles from "../MyRequestsPage/MyRequestsPage.module.css";
import RequestsList from "../MyRequestsPage/ui/RequestsList/RequestsList.tsx";

function ArchivePage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Архив заявок</h1>
      <RequestsList isShortened={true} />
    </section>
  );
}

export default ArchivePage;