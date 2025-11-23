import styles from "./MailPage.module.css";
import type { MailNotification } from "./ui/MailNotificationCard/types.ts";
import MailNotificationCard from "./ui/MailNotificationCard/MailNotificationCard.tsx";

const notificationsMock: MailNotification[] = [
  {
    id: '1',
    title: 'Заявка #78543 выполнена',
    description: 'Ваша заявка #54321 “Сломал компьютер” выполнена. Просим оставить отзыв о проделанной работе',
    status: 'done'
  },
  {
    id: '2',
    title: 'Заявка #12345 одобрена',
    description: 'Ваша заявка #12345 “Сломалось окно. Помогите” принята в работу',
    status: 'accepted'
  },
  {
    id: '3',
    title: 'Заявка #12345 отправлена',
    description: 'Вы отправили заявку #12345 “Сломалось окно. Помогите”. После одобрения заявки, она будет принята в работу',
    status: 'sent'
  },
  {
    id: '4',
    title: 'Заявка #11111 отклонена',
    description: 'Вы отправили заявку #11111 “Ниче не работает”. Ваша заявка отклонена. Причина: недостаточно описания к заявке. Отправьте новую заявку с более подробным описанием',
    status: 'rejected'
  }
];

function MailPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Входящие сообщения</h1>
      <div className={styles.notifications}>
        {
          notificationsMock.map((notification) => <MailNotificationCard key={notification.id} {...notification} />)
        }
      </div>
    </section>
  );
}

export default MailPage;