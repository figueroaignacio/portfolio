// Components
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";

// i18n
import { useTranslation } from "react-i18next";

type MyFeedbacks = {
  avatar: string;
  name: string;
  role: string;
  description: string;
};

// Styles
import styles from "./Feedback.module.css";

export function Feedback() {
  const { t } = useTranslation();

  // Asegúrate de que el objeto que obtienes de t("feedback.myRecomendations") tiene la estructura correcta
  const feedbacks: MyFeedbacks[] = t("feedback.myRecomendations", {
    returnObjects: true,
  });

  return (
    <section className={styles.feedbackSection}>
      <h2 className={styles.feedbackTitle}>{t("feedback.title")}</h2>
      <div className={styles.feedbackBox}>
        {feedbacks.map((feedback: MyFeedbacks, index: number) => (
          <div key={index} className={`${styles.feedbackItem} fade`}>
            <FeedbackCard
              avatar={feedback.avatar}
              description={feedback.description}
              name={feedback.name}
              role={feedback.role}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
