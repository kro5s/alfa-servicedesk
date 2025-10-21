import { Tab, Tabs } from "@alfalab/core-components/tabs";
import LoginForm from "../../components/Forms/ReadyMadeForms/LoginForm/LoginForm.tsx";
import { useState } from "react";
import styles from "./LoginPage.module.css";
import illustration from "../../assets/illustration.svg";
import { Button } from "@alfalab/core-components/button";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [selectedTab, setSelectedTab] = useState("login");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("accessToken", "testToken");
    navigate("/new-request");
  };

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
        <Tab
          id={"login"}
          title={"Корпоративный аккаунт"}
          className={styles.tab}
        >
          <LoginForm />
        </Tab>
        <Tab id={"sso"} title={"SSO"} className={styles.tab}>
          <Button
            view={"accent"}
            style={{ width: "100%" }}
            onClick={handleLogin}
          >
            Авторизоваться
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}

export default LoginPage;
