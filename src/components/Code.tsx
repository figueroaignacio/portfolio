import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyButton } from "./CopyButton";

export const Code = ({ value }: any) => {
  return (
    <div className="relative my-10">
      <CopyButton textToCopy={value.code} />
      <SyntaxHighlighter
        language={value.language}
        style={atomOneDarkReasonable}
        customStyle={{
          borderRadius: ".75rem",
          padding: "1.5rem",
        }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};
