import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import type { RegistrationFormData } from "./types.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema } from "./shema.ts";
import { Input } from "@alfalab/core-components/input";
import { Button } from "@alfalab/core-components/button";
import PasswordInput from "../../InputFields/PasswordInput/PasswordInput.tsx";
import styles from "./RegistrationForm.module.css";

function RegistrationForm() {
  const { handleSubmit, control } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationFormSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<RegistrationFormData> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Controller
        name={"firstName"}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            size={"s"}
            value={field.value || ""}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            label={"Ваше имя"}
            labelView={"outer"}
            placeholder={"Введите имя"}
            error={error?.message}
            block
          />
        )}
      />

      <Controller
        name={"lastName"}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            size={"s"}
            value={field.value || ""}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
            label={"Ваша фамилия"}
            labelView={"outer"}
            placeholder={"Введите фамилию"}
            error={error?.message}
            block
          />
        )}
      />

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
        render={({ field, fieldState }) => (
          <PasswordInput field={field} fieldState={fieldState} />
        )}
      />

      <Button view={"primary"} type={"submit"}>
        Зарегистрироваться
      </Button>
    </form>
  );
}

export default RegistrationForm;
