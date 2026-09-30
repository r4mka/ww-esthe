import type { SVGProps } from "react";

type MessengerIconProps = SVGProps<SVGSVGElement>;

export function MessengerIcon(props: MessengerIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3.5c-5 0-9 3.6-9 8.2 0 2.6 1.4 4.9 3.5 6.4v3l3.2-1.8c.7.2 1.5.3 2.3.3 5 0 9-3.6 9-8.2s-4-8.2-9-8.2Z" />
      <path d="m7.5 13 3.3-3.6 2.4 2.1L16.5 8l-3.3 3.6-2.4-2.1L7.5 13Z" />
    </svg>
  );
}
