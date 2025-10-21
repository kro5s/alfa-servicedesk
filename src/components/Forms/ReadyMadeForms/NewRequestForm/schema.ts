import * as yup from "yup";
import {
  MAX_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
} from "../../errorMessages.ts";
import type { RequestPriorityType } from "../../../../types/types.ts";

const priorities: RequestPriorityType[] = ["low", "medium", "high"];

export const newRequestFormSchema = yup
  .object({
    title: yup
      .string()
      .min(6, MIN_LENGTH_ERROR_MESSAGE(6))
      .max(48, MAX_LENGTH_ERROR_MESSAGE(48))
      .required(REQUIRED_ERROR_MESSAGE),
    priority: yup.string().oneOf(priorities).required(),
    category: yup.string().required(REQUIRED_ERROR_MESSAGE),
    subcategory: yup.string().optional(),
    location: yup.number().required(REQUIRED_ERROR_MESSAGE),
    files: yup.mixed<File[]>().optional(),
    content: yup
      .string()
      .min(10, MIN_LENGTH_ERROR_MESSAGE(10))
      .max(512, "")
      .required(REQUIRED_ERROR_MESSAGE),
  })
  .required();
