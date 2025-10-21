import { useQuery } from "@tanstack/react-query";
import { myRequests } from "../../../../mocks/my-requests.ts";
import { Spinner } from "@alfalab/core-components/spinner";
import styles from "./RequestsList.module.css";
import RequestCard from "../../../../components/RequestCard/RequestCard.tsx";
import type { RequestPreview } from "../../../../types/types.ts";

function RequestsList() {
  const { data, isLoading, isError } = useQuery<RequestPreview[]>({
    queryKey: ["requests"],
    queryFn: async () => {
      return await new Promise((resolve) =>
        setTimeout(() => resolve(myRequests), Math.random() * 2000 + 1000),
      );
    },
    refetchOnMount: false, // TODO delete
    refetchOnWindowFocus: false, // TODO delete
    refetchOnReconnect: false, // TODO delete
  });

  if (isLoading)
    return (
      <div className={styles.centered}>
        <Spinner visible size={64} lineWidth={3} />
      </div>
    );

  if (isError) return <div className={styles.centered}>Произошла ошибка</div>;

  return (
    <div className={styles.list}>
      {(data || []).map((request) => (
        <RequestCard key={request.id} {...request} />
      ))}
    </div>
  );
}

export default RequestsList;
