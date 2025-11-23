export type MailNotificationStatus =
  | "done"
  | "accepted"
  | "sent"
  | "rejected"
  | "info";

export interface MailNotification {
  id: string;
  title: string;
  description: string;
  status: MailNotificationStatus;
}
