import { PortableTextReactComponents } from "@portabletext/react";
import { Code } from "./Code";

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: { src: string; alt?: string } }) => (
      <img
        src={value.src}
        alt={value.alt || "Image"}
        className="w-full h-auto rounded-lg my-6 shadow-md"
      />
    ),
    code: Code,
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-foreground mb-4 mt-8 scroll-mt-24 md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-muted-foreground mb-3 mt-6 scroll-mt-24 md:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium text-secondary mb-2 mt-4 scroll-mt-24 md:text-2xl">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base text-foreground leading-relaxed mb-4 md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-foreground mb-4">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const target = value?.target || "_self";

      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-secondary hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};
