// Hooks
import { useNavigate } from "react-router-dom";

// Icons
import { ArrowLeftIcon } from "./Icons";

export function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="mb-5 flex items-center gap-3 backdrop-blur-xl p-2 lg:p-0  rounded-md"
    >
      <ArrowLeftIcon /> Go Back
    </button>
  );
}
