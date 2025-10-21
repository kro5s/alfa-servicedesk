import { type RequestPriorityType } from "../../../../types/types.ts";

export interface NewRequestFormData {
  title: string;
  priority: RequestPriorityType;
  category: string;
  subcategory?: string;
  location: number;
  content: string;
  files?: File[];
}
