import { Tab, Tabs } from "@alfalab/core-components/tabs";
import LoginForm from "../../components/Forms/ReadyMadeForms/LoginForm/LoginForm.tsx";
import { useState } from "react";
import RegistrationForm from "../../components/Forms/ReadyMadeForms/RegistrationForm/RegistrationForm.tsx";
import styles from "./LoginPage.module.css";
import illustration from "../../assets/illustration.svg";

function LoginPage() {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={illustration} alt="Illustration" />
      </div>

      <Tabs
        className={styles.tabs}
        selectedId={selectedTab}
        onChange={(_, { selectedId }) => setSelectedTab(selectedId as string)}
      >
        <Tab id={"login"} title={"Логин"} className={styles.tab}>
          <LoginForm />
        </Tab>
        <Tab id={"registrations"} title={"Регистрация"} className={styles.tab}>
          <RegistrationForm />
        </Tab>
      </Tabs>
    </div>
  );
}

export default LoginPage;
