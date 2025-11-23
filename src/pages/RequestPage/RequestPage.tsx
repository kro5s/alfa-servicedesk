import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { myRequests } from "../../mocks/my-requests.ts";
import { Spinner } from "@alfalab/core-components/spinner";
import styles from "./RequestPage.module.css";
import type { Request, RequestPreview } from "../../types/types.ts";
import RequestPriority from "../../components/RequestPriority/RequestPriority.tsx";
import RequestStatus from "../../components/RequestStatus/RequestStatus.tsx";
import RequestChatMessage from "./ui/RequestChatMessage/RequestChatMessage.tsx";
import RequestChatInput from "./ui/RequestChatInput/RequestChatInput.tsx";
import { Divider } from "@alfalab/core-components/divider";
import { Button } from "@alfalab/core-components/button";
import { StarCompactSIcon } from "@alfalab/icons-glyph/StarCompactSIcon";
import { useState } from "react";
import ReviewModal from "./ui/ReviewModal/ReviewModal.tsx";

const formatter = Intl.DateTimeFormat("ru-RU");

function RequestPage() {
  const { id } = useParams();
  const [reviewModalOpened, setReviewModalOpened] = useState(false);

  const { data, isLoading, isError } = useQuery<Request>({
    queryKey: ["requests", id],
    queryFn: async () => {
      // TODO delete
      try {
        return await new Promise((resolve, reject) =>
          setTimeout(
            () => {
              const requestPreview = myRequests.find((req) => req.id === id);

              if (!requestPreview) reject();

              const request: Request = {
                ...(requestPreview as RequestPreview),
                category: "IT отдел",
                expectancy: 14,
              };

              resolve(request);
            },
            Math.random() * 2000 + 1000,
          ),
        );
      } catch {
        throw new Error();
      }
    },
    refetchOnMount: false, // TODO delete
    refetchOnWindowFocus: false, // TODO delete
    refetchOnReconnect: false, // TODO delete
    retry: false, // TODO delete
  });

  if (isLoading)
    return (
      <div className={styles.centered}>
        <Spinner visible size={64} lineWidth={3} />
      </div>
    );

  if (isError || !data)
    return <div className={styles.centered}>Заявка не найдена</div>;

  return (
    <section className={styles.container}>
      <ReviewModal
        open={reviewModalOpened}
        onClose={() => setReviewModalOpened(false)}
        setReviewModalOpened={setReviewModalOpened}
      />
      <div className={styles.header}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.headerInfo}>
          <RequestPriority priority={data.priority} />
          <RequestStatus status={data.status} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainInfo}>
          <div className={styles.infoLabels}>
            <div className={styles.infoLabel}>
              <span className={styles.labelTitle}>Дата создания:</span>
              <span className={styles.labelData}>
                {formatter.format(new Date(data.created_at))}
              </span>
            </div>
            <div className={styles.infoLabel}>
              <span className={styles.labelTitle}>Категория:</span>
              <span className={styles.labelData}>
                {data.category} {data.subcategory && `> ${data.subcategory}`}
              </span>
            </div>
            <div className={styles.infoLabel}>
              <span className={styles.labelTitle}>Время выполнения:</span>
              <span className={styles.labelData}>
                {data.expectancy ? `~${data.expectancy} дней` : "Не определено"}
              </span>
            </div>
          </div>

          {data.status === "done" && (
            <Button
              onClick={() => setReviewModalOpened(true)}
              className={styles.reviewButton}
              leftAddons={<StarCompactSIcon />}
              size="xxs"
              view="accent"
            >
              Оставить отзыв
            </Button>
          )}
        </div>

        <p className={styles.description}>{data.description}</p>

        <Divider />

        <div className={styles.chat}>
          <RequestChatMessage
            message={"Долго ждать? Невозможно в офисе находиться"}
          />
          <RequestChatMessage message={"Скоро починим"} reverted />
          <RequestChatInput />
        </div>
      </div>
    </section>
  );
}

export default RequestPage;
