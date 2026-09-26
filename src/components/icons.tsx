import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (size = 18): P => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export const ApexMark = ({ size = 22, ...rest }: P & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    {...rest}
  >
    <path
      d="M2 13.5 12 5l10 8.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 18.5 12 13l6.5 5.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.55"
    />
  </svg>
);

export const ChevronDown = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeft = (p: P) => (
  <svg {...base(18)} {...p}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight = (p: P) => (
  <svg {...base(18)} {...p}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const ArrowRight = (p: P) => (
  <svg {...base(17)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Phone = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  </svg>
);

export const Clock = (p: P) => (
  <svg {...base(16)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const Pin = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Globe = (p: P) => (
  <svg {...base(16)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18-2.5-3-2.5-15.5 0-18Z" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg {...base(16)} {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="3" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
  </svg>
);

export const Wrench = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="M14.5 3a5 5 0 0 0-4.3 7.5L4 16.7V20h3.3l6.2-6.2A5 5 0 1 0 14.5 3Z" />
  </svg>
);

export const Check = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const Cross = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Plus = (p: P) => (
  <svg {...base(18)} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Minus = (p: P) => (
  <svg {...base(18)} {...p}>
    <path d="M5 12h14" />
  </svg>
);

export const Close = (p: P) => (
  <svg {...base(16)} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Star = ({ size = 22, ...rest }: P & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...rest}>
    <path
      d="M12 3.5l2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6L3.2 9.9l6.1-.8L12 3.5Z"
      fill="currentColor"
    />
  </svg>
);

export const Instagram = (p: P) => (
  <svg {...base(18)} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = ({ size = 18, ...rest }: P & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...rest}>
    <path
      d="M13.5 21v-7.2h2.6l.4-3h-3V8.9c0-.9.3-1.5 1.6-1.5h1.5V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.8v3h2.6V21h3.1Z"
      fill="currentColor"
    />
  </svg>
);
