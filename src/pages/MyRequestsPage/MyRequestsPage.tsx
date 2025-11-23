import styles from "./MyRequestsPage.module.css";
import RequestsList from "./ui/RequestsList/RequestsList.tsx";
import type { Role } from "../../types/types.ts";

function MyRequestsPage() {
  const role = localStorage.getItem("role") as Role;

  const title = role === 'user' ? 'Отправленные заявки' : 'Прикрепленные заявки'

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <RequestsList withMeta={['executor', 'aho'].includes(role)} />
    </section>
  );
}

export default MyRequestsPage;
