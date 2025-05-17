---
title: My Markdown styles
description: This post demonstrates all the available styles for Markdown content using my own CSS styles. Below, you'll see examples of each type of element and how it looks with the styles I've defined.
published: true
locale: en
date: 2025-5-17
tags: ['CSS', 'Styles', 'Design']
---

## Headings

Headings provide a hierarchical structure to your content. We use decreasing sizes with proportional spacing to create a clear visual hierarchy.

### Level 3 Heading

This is an example of a level 3 heading. Note how it's smaller than the level 2 but still stands out from normal text.

#### Level 4 Heading

Ideal for sections within sections while maintaining visual hierarchy.

## Basic Text and Paragraphs

Paragraphs are the most common element in any document. They are displayed with appropriate spacing to improve readability. Here are some examples of text formatting:

**Bold text** is used to emphasize important words or phrases. _Italic text_ adds a more subtle emphasis or is used for special terms.

You can also combine **nested _formats_** when necessary to give additional emphasis to specific parts of a sentence.

## Links

[Links](https://example.com) are fundamental for navigation. Our links use the primary theme color with a subtle underline that becomes more prominent when hovering over them.

## Lists

### Unordered Lists

Unordered lists use bullets for each item:

- First list item
- Second list item
- Third item with a nested list:
  - Nested item one
  - Nested item two
- Fourth list item

### Ordered Lists

Ordered lists use numbers to indicate sequence:

1. First step of the process
2. Second step of the process
3. Third step with nested items:
   1. Sub-step one
   2. Sub-step two
4. Final step of the process

## Quotes

Quotes are displayed with a distinctive style to differentiate them from normal text:

> This is an example of a quote. Quotes are useful for highlighting important information or including text from other sources.
>
> Quotes can contain multiple paragraphs and maintain their distinctive style throughout the entire block.

## Code

### Inline Code

You can include `inline code` within a paragraph to highlight variable names, commands, or small code snippets.

### Code Blocks

For longer code snippets, use code blocks with syntax highlighting:

```javascript
// This is a comment
function greet(name) {
  console.log(`Hello, ${name}!`);
  return {
    message: `Welcome, ${name}`,
    timestamp: new Date(),
  };
}

// Call the function
const result = greet('World');
```

## Tables

Tables are useful for presenting structured data:

| Name    | Age | Profession |
| ------- | --- | ---------- |
| Anna    | 28  | Designer   |
| Charles | 35  | Developer  |
| Elena   | 42  | Architect  |
| David   | 31  | Writer     |

## Images

Images are displayed with rounded borders and adapted to the width of the container:

![Image description](https://via.placeholder.com/800x400)

You can also include images with captions:

<figure>
  <img src="https://via.placeholder.com/800x400" alt="Image with caption">
  <figcaption>This is a caption to explain the image above</figcaption>
</figure>

## Horizontal Lines

Horizontal lines help separate sections of content:

---

## Combination of Elements

In practice, these elements are combined to create rich and structured content:

### Example Project

This is an example of how you might document a project using various Markdown elements:

> **Important note:** This project is in beta phase and may contain errors.

#### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/user/project.git
   cd project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file based on `.env.example`
   - Update the values according to your environment

4. Start the development server:
   ```bash
   npm run dev
   ```

#### Project Structure

| Directory | Purpose         |
| --------- | --------------- |
| `/src`    | Source code     |
| `/public` | Static files    |
| `/tests`  | Automated tests |
| `/docs`   | Documentation   |

## Markdown Styles

```css
.prose {
  overflow-x: hidden;
  word-break: break-word;
}

.prose h1 {
  font-size: 2.25rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--color-foreground);
  line-height: 1.1;
}

.prose h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-foreground);
  line-height: 1.2;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--color-foreground);
  line-height: 1.3;
}

.prose h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-foreground);
}

.prose p {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.prose strong {
  font-weight: 600;
  color: var(--color-foreground);
}

.prose em {
  font-style: italic;
}

.prose a {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: all 0.2s ease;
}

.prose a:hover {
  color: var(--color-primary);
  opacity: 0.85;
  text-decoration-thickness: 2px;
}

.prose ul {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.prose ol {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  list-style-type: decimal;
}

.prose li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose li > ul,
.prose li > ol {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose blockquote {
  font-style: italic;
  border-left: 3px solid var(--color-border);
  padding-left: 1rem;
  margin-left: 0;
  margin-right: 0;
  background-color: var(--color-muted);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1rem 1.5rem;
}

.prose blockquote p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-muted-foreground);
}

.prose code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
  padding: 0.25rem 0.4rem;
  border-radius: var(--radius-sm);
}

.prose pre {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding: 1rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.prose pre code {
  color: inherit;
  background-color: transparent;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.7;
}

.prose table {
  width: 100%;
  table-layout: auto;
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
  overflow-x: auto;
}

.prose thead {
  border-bottom: 2px solid var(--color-border);
}

.prose thead th {
  padding: 0.75rem;
  font-weight: 600;
  vertical-align: bottom;
}

.prose tbody tr {
  border-bottom: 1px solid var(--color-border);
}

.prose tbody tr:last-child {
  border-bottom: none;
}

.prose tbody td {
  padding: 0.75rem;
  vertical-align: top;
}

.prose img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.prose figure {
  margin: 2rem 0;
}

.prose figcaption {
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
}

.prose hr {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
}

.post-meta .post-date {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.post-meta .post-author {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.post-tag {
  background-color: var(--color-secondary);
  color: var(--color-secondary-foreground);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.post-tag:hover {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}

@media (max-width: 768px) {
  .prose {
    font-size: 0.9375rem;
  }

  .prose h1 {
    font-size: 1.875rem;
  }

  .prose h2 {
    font-size: 1.5rem;
  }

  .prose h3 {
    font-size: 1.25rem;
  }

  .prose pre {
    border-radius: var(--radius-sm);
  }

  .prose pre,
  .prose table {
    width: 100%;
    overflow-x: auto;
  }
}
```

---

This concludes our demonstration of Markdown styles. All these visual elements are carefully designed to work with the theme variables you've defined, ensuring consistency throughout your application.
