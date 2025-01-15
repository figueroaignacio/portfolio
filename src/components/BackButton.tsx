import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "./Icons";

export function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(-1);
      });
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mb-5 flex items-center gap-3 backdrop-blur-xl p-2 lg:p-0"
    >
      <ArrowLeftIcon /> Go Back
    </button>
  );
}
