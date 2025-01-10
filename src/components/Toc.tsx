"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function Toc() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const updateHeadings = () => {
      const headingElements = Array.from(
        document.querySelectorAll(".prose h2, .prose h3")
      );

      const extractedHeadings = headingElements.map((heading) => {
        const id =
          heading.id ||
          heading.textContent?.replace(/\s+/g, "-").toLowerCase() ||
          "";
        return {
          id,
          text: heading.textContent || "",
          level: heading.tagName === "H2" ? 2 : 3,
        };
      });

      setHeadings(extractedHeadings);
    };

    updateHeadings();

    const observer = new MutationObserver(() => {
      console.log("Mutation observed, updating headings...");
      updateHeadings();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    const interval = setInterval(updateHeadings, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Current headings state:", headings);
  }, [headings]);

  if (headings.length === 0) {
    return <div>No headings found</div>;
  }

  return (
    <nav className="space-y-2">
      <p className="font-bold mb-4 pl-8">Table of Contents</p>
      {headings.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block text-foreground text-sm ${
            item.level === 2 ? "pl-4" : "pl-8"
          } hover:underline`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}
