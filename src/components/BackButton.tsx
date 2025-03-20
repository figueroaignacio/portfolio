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
      className="inline-flex items-center justify-center mb-5 gap-x-2 px-5 py-2.5 rounded-2xl bg-accent hover:scale-105 transition-transform font-medium text-sm shrink-0 text-white cursor-pointer"
    >
      <ArrowLeftIcon /> Go Back
    </button>
  );
}
