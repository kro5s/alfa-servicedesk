export type RequestPriorityType = "high" | "medium" | "low";
export type RequestStatusType = "initial" | "in_progress" | "done";

export interface Request {
  id: string;
  title: string;
  description: string;
  priority: RequestPriorityType;
  status: RequestStatusType;
  created_at: string;
  category: string;
  expectancy?: number;
  subcategory?: string;
  files?: File[];
}

export type RequestPreview = Pick<
  Request,
  "id" | "description" | "title" | "priority" | "status" | "created_at"
>;
