import * as yup from "yup";
import {
  EMAIL_ERROR_MESSAGE,
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
} from "../../errorMessages.ts";

export const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .email(EMAIL_ERROR_MESSAGE)
      .max(64, MAX_LENGTH_ERROR_MESSAGE(64))
      .required(REQUIRED_ERROR_MESSAGE),
    password: yup
      .string()
      .min(8, MIN_LENGTH_ERROR_MESSAGE(8))
      .max(64, MAX_LENGTH_ERROR_MESSAGE(64))
      .required(REQUIRED_ERROR_MESSAGE),
  })
  .required();
