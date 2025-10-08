import * as yup from "yup";
import { EMAIL_ERROR_MESSAGE } from "../../errorMessages.ts";

export const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .required("Данное поле обязательно"),
    password: yup
      .string()
      .required("Данное поле обязательно")
      .min(8, "Минимум 8 символов"),
  })
  .required();
