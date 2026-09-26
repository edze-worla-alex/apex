import type { ReactNode } from "react";
import { useReveal } from "../lib/hooks";

type Line = { text: string; variant?: "serif" | "accent" };

/**
 * The signature two-line heading: each line sits inside an overflow-hidden
 * mask and slides up when the heading scrolls into view.
 */
export function Display({
  lines,
  as: Tag = "h2",
  size = "lg",
  className = "",
}: {
  lines: Line[];
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "sm";
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLHeadingElement>(0.35);

  return (
    <Tag
      ref={ref as never}
      className={[
        "display",
        size === "sm" ? "display--sm" : "",
        shown ? "is-in" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {lines.map((line, i) => (
        <span
          key={line.text}
          className={`ln ${line.variant ? `ln--${line.variant}` : ""}`}
        >
          <span style={{ ["--d" as string]: `${i * 110}ms` }}>{line.text}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Fade-and-rise wrapper used for body copy, cards and media. */
export function Reveal({
  children,
  delay = 0,
  scale = false,
  className = "",
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  scale?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "li" | "section" | "figure" | "p";
}) {
  const { ref, shown } = useReveal(0.12);

  return (
    <Tag
      ref={ref as never}
      className={[
        scale ? "rv-scale" : "rv",
        shown ? "is-in" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ["--d" as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
