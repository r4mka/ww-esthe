import type { SVGProps } from "react";

type AddressIconProps = SVGProps<SVGSVGElement>;

export function AddressIcon(props: AddressIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}
