import { useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { FeedbackCard } from "../../components/FeedbackCard/FeedbackCard";
import { FramerDiv, FramerH2 } from "../../components/Framer";

// Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../constants/animations";

// Styles
import styles from "./Feedback.module.css";

type MyFeedbacks = {
  avatar: string;
  name: string;
  role: string;
  description: string;
  linkedInProfile: string;
};

export function Feedback() {
  const { t } = useTranslation();
  const feedbacks: MyFeedbacks[] = t("feedback.myRecomendations", {
    returnObjects: true,
  });

  const [visibleFeedbacks, setVisibleFeedbacks] = useState(3);

  const handleLoadMore = () => {
    setVisibleFeedbacks((prevVisible) => prevVisible + 2);
  };

  return (
    <section className={styles.feedbackSection}>
      <FramerH2
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className={styles.feedbackTitle}
      >
        {t("feedback.title")}
      </FramerH2>
      <div className={styles.feedbackBox}>
        {feedbacks.slice(0, visibleFeedbacks).map((feedback, index) => (
          <FramerDiv
            key={index}
            className={styles.feedbackItem}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <FeedbackCard
              linkedInProfile={feedback.linkedInProfile}
              avatar={feedback.avatar}
              description={feedback.description}
              name={feedback.name}
              role={feedback.role}
            />
          </FramerDiv>
        ))}
      </div>
      {visibleFeedbacks < feedbacks.length && (
        <button onClick={handleLoadMore} className={styles.loadMoreButton}>
          {t("feedback.loadMore")}
        </button>
      )}
    </section>
  );
}
