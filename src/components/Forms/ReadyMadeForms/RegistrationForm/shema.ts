import * as yup from "yup";
import {
  EMAIL_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
} from "../../errorMessages.ts";

export const registrationFormSchema = yup
  .object({
    firstName: yup
      .string()
      .required(REQUIRED_ERROR_MESSAGE)
      .min(3, "Имя слишком короткое")
      .max(25, "Слишком длинное имя"),
    lastName: yup
      .string()
      .required(REQUIRED_ERROR_MESSAGE)
      .min(2, "Фамилия слишком короткая")
      .max(25, "Фамилия слишком длинная"),
    email: yup
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .required(REQUIRED_ERROR_MESSAGE),
    password: yup
      .string()
      .required(REQUIRED_ERROR_MESSAGE)
      .min(8, "Минимум 8 символов"),
  })
  .required();
