import type { SVGProps } from "react";

type PhoneIconProps = SVGProps<SVGSVGElement>;

export function PhoneIcon(props: PhoneIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.7 3.5 9.4 3l2 4.7-2 1.5a14.5 14.5 0 0 0 5.4 5.4l1.5-2 4.7 2-.5 2.7a2 2 0 0 1-2.2 1.6A16.5 16.5 0 0 1 5.1 5.7a2 2 0 0 1 1.6-2.2Z" />
    </svg>
  );
}
