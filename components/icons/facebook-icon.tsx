import type { SVGProps } from "react";

type FacebookIconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: FacebookIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M13.5 20v-7h2.5l.5-3h-3V8.2c0-.9.3-1.7 1.8-1.7H17V3.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V10H8.5v3h2.6v7" />
    </svg>
  );
}
