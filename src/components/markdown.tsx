interface MarkdownProps {
  code: string;
}

export function Markdown({ code }: MarkdownProps) {
  return <div dangerouslySetInnerHTML={{ __html: code }} />;
}
