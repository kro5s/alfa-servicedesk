import styles from "./NewRequestPage.module.css";
import NewRequestForm from "../../components/Forms/ReadyMadeForms/NewRequestForm/NewRequestForm.tsx";

function NewRequestPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Новая заявка</h1>
      <div className={styles.main}>
        <NewRequestForm />
      </div>
    </section>
  );
}

export default NewRequestPage;
