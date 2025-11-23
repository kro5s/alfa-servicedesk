import { Tab, Tabs } from "@alfalab/core-components/tabs";
import LoginForm from "../../components/Forms/ReadyMadeForms/LoginForm/LoginForm.tsx";
import { useState } from "react";
import styles from "./LoginPage.module.css";
import illustration from "../../assets/illustration.svg";
import { Button } from "@alfalab/core-components/button";
import { useNavigate } from "react-router-dom";
import { RadioGroup } from "@alfalab/core-components/radio-group";
import { Radio } from "@alfalab/core-components/radio";
import type { Role } from "../../types/types.ts";



function LoginPage() {
  const [selectedTab, setSelectedTab] = useState("login");
  const [role, setRole] = useState<Role>("user");

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("accessToken", "testToken");
    localStorage.setItem("role", role);
    navigate("/new-request");
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={illustration} alt="Illustration" />
      </div>

      <div className={styles.tabsContainer}>
        <Tabs
          selectedId={selectedTab}
          onChange={(_, { selectedId }) => setSelectedTab(selectedId as string)}
        >
          <Tab
            id={"login"}
            title={"Корпоративный аккаунт"}
            className={styles.tab}
          >
            <LoginForm handleLogin={handleLogin} />
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

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <RadioGroup
            value={role}
            onChange={(_, payload) => setRole(payload.value as Role)}
          >
            <Radio label="[DEV] Войти как пользователь" value="user" />
            <Radio label="[DEV] Войти как исполнитель" value="executor" />
            <Radio label="[DEV] Войти как сотрудник АХО" value="aho" />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
