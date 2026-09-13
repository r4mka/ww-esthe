import type { SVGProps } from "react";

type MailIconProps = SVGProps<SVGSVGElement>;

export function MailIcon(props: MailIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 5.5h18v13H3z" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}
