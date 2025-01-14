import { useState } from "react";
import { CheckIcon, ClipboardIcon } from "./Icons";

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton = ({ textToCopy }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button onClick={handleCopy} className="absolute top-2 right-2 px-2 py-1">
      {copied ? <CheckIcon /> : <ClipboardIcon />}
    </button>
  );
};
