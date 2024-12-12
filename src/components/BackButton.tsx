import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBack} className="mb-5">
      &#8592; Back
    </button>
  );
}
