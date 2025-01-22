import React, { forwardRef, JSX } from "react";
import { cn } from "@/modules/core/lib/utils";

// Reusable helper to create components with consistent structure
const createComponent = <T extends HTMLElement>(
  tag: keyof JSX.IntrinsicElements,
  defaultClassName: string,
  displayName: string
) => {
  const Component = forwardRef<T, React.HTMLAttributes<T>>((props, ref) => {
    return React.createElement(
      tag,
      { ...props, ref, className: cn(defaultClassName, props.className) },
      props.children
    );
  });
  Component.displayName = displayName;
  return Component;
};

export const H1 = createComponent<HTMLHeadingElement>(
  "h1",
  "scroll-m-20 text-2xl t-m:text-3xl t-x:text-4xl d-s:text-5xl font-extrabold tracking-tight",
  "H1"
);

export const H2 = createComponent<HTMLHeadingElement>(
  "h2",
  "scroll-m-20 py-2 text-xl t-m:text-2xl t-x:text-3xl d-s:text-4xl font-extrabold tracking-tight first:mt-0",
  "H2"
);

export const H3 = createComponent<HTMLHeadingElement>(
  "h3",
  "scroll-m-20 text-lg t-m:text-xl t-x:text-2xl d-s:text-3xl font-semibold tracking-tight",
  "H3"
);

export const H4 = createComponent<HTMLHeadingElement>(
  "h4",
  "scroll-m-20 text-base t-m:text-lg t-x:text-xl d-s:text-2xl font-semibold tracking-tight",
  "H4"
);

export const Lead = createComponent<HTMLParagraphElement>(
  "p",
  "text-base text-muted-foreground",
  "Lead"
);
// [&:not(:first-child)]:mt-6
export const P = createComponent<HTMLParagraphElement>("p", "leading-7", "P");

export const Large = createComponent<HTMLDivElement>(
  "div",
  "text-base t-m:text-lg t-x:text-xl d-s:text-2xl font-semibold",
  "Large"
);

export const Small = createComponent<HTMLParagraphElement>(
  "p",
  "text-xs font-medium leading-none",
  "Small"
);

export const Muted = createComponent<HTMLSpanElement>(
  "span",
  "text-sm text-muted-foreground",
  "Muted"
);

export const InlineCode = createComponent<HTMLSpanElement>(
  "code",
  "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  "InlineCode"
);

export const MultilineCode = createComponent<HTMLPreElement>(
  "pre",
  "relative rounded bg-muted p-4 font-mono text-sm font-semibold overflow-x-auto",
  "MultilineCode"
);

export const List = createComponent<HTMLUListElement>(
  "ul",
  "my-6 ml-6 list-disc [&>li]:mt-2",
  "List"
);

export const Quote = createComponent<HTMLQuoteElement>(
  "blockquote",
  "mt-6 border-l-2 pl-6 italic text-muted-foreground",
  "Quote"
);
