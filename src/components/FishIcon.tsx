import type { SVGProps } from "react";

// Christian Ichthys (fish) symbol — inline SVG so we don't ship FontAwesome.
export function FishIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M4 16 C 14 2, 40 2, 52 16 C 40 30, 14 30, 4 16 Z" />
      <path d="M52 16 L62 6 M52 16 L62 26" />
      <circle cx="14" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
