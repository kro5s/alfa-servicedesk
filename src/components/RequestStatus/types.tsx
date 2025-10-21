import type { StatusProps } from "@alfalab/core-components/status";
import type { ReactNode } from "react";
import type { RequestStatusType } from "../../types/types.ts";
import { CheckmarkCircleSIcon } from "@alfalab/icons-glyph/CheckmarkCircleSIcon";
import { ClockSIcon } from "@alfalab/icons-glyph/ClockSIcon";
import { CalendarSIcon } from "@alfalab/icons-glyph/CalendarSIcon";

export const requestStatusColorMappings: Record<
  RequestStatusType,
  StatusProps["color"]
> = {
  initial: "grey",
  in_progress: "blue",
  done: "green",
};

export const requestStatusIconMappings: Record<RequestStatusType, ReactNode> = {
  initial: <CalendarSIcon width={12} height={12} />,
  in_progress: <ClockSIcon width={12} height={12} />,
  done: <CheckmarkCircleSIcon width={12} height={12} />,
};

export const requestStatusNameMappings: Record<RequestStatusType, string> = {
  initial: "Не начат",
  in_progress: "В работе",
  done: "Выполнен",
};
