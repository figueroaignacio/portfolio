import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Code = ({ value }: any) => {
  return (
    <div className="my-10">
      <SyntaxHighlighter
        language={value.language}
        style={atomOneDarkReasonable}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};
