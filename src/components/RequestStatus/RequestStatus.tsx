import {
  requestStatusColorMappings,
  requestStatusIconMappings,
  requestStatusNameMappings,
} from "./types.tsx";
import { Status } from "@alfalab/core-components/status";
import type { RequestStatusType } from "../../types/types.ts";

function RequestStatus({ status }: { status: RequestStatusType }) {
  return (
    <Status
      color={requestStatusColorMappings[status]}
      leftAddons={requestStatusIconMappings[status]}
      size={32}
    >
      {requestStatusNameMappings[status]}
    </Status>
  );
}

export default RequestStatus;
