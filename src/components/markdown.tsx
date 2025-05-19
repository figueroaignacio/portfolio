import '@/styles/markdown.css';

interface MarkdownProps {
  code: string;
}

export function Markdown({ code }: MarkdownProps) {
  return (
    <article className="prose">
      <div dangerouslySetInnerHTML={{ __html: code }} />
    </article>
  );
}
