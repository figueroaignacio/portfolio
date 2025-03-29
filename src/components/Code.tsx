// Highlighter
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Components
import { CopyButton } from "./CopyButton";

export const Code = ({ value }: any) => {
  return (
    <div className="relative my-6">
      <CopyButton textToCopy={value.code} />
      <div className="w-full overflow-x-auto rounded-lg bg-[#282c34]">
        <SyntaxHighlighter
          language={value.language}
          style={atomOneDarkReasonable}
          customStyle={{
            borderRadius: "0.5rem",
            padding: "1rem",
            fontSize: "0.875rem",
            margin: 0,
            overflowX: "auto",
            whiteSpace: "pre",
            wordBreak: "normal",
            minWidth: "100%",
            width: "fit-content",
          }}
          wrapLines={false}
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
