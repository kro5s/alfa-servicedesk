import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@alfalab/core-components/input";
import PasswordInput from "../../InputFields/PasswordInput/PasswordInput.tsx";
import { Button } from "@alfalab/core-components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "./schema.ts";
import type { LoginFormData } from "./types.ts";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const { handleSubmit, control } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Controller
        name={"email"}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            size={"s"}
            value={field.value || ""}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            label={"Электронная почта"}
            labelView={"outer"}
            placeholder={"Введите email"}
            error={error?.message}
            block
          />
        )}
      />

      <Controller
        name={"password"}
        control={control}
        render={(props) => (
          <PasswordInput field={props.field} fieldState={props.fieldState} />
        )}
      />

      <Button view={"primary"} type={"submit"}>
        Войти
      </Button>
    </form>
  );
}

export default LoginForm;
