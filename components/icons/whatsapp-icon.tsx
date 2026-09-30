import type { SVGProps } from "react";

type WhatsAppIconProps = SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: WhatsAppIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3.5a8 8 0 0 0-6.9 12l-1 4 4.2-1a8 8 0 1 0 3.7-15Z" />
      <path d="M9.2 8.7c.4-.1.7 0 .9.4l.6 1.3c.2.4.1.8-.2 1.1l-.4.4a5.6 5.6 0 0 0 2.9 2.9l.4-.4c.3-.3.7-.4 1.1-.2l1.3.6c.4.2.5.5.4.9-.3 1-1.2 1.6-2.3 1.5-2.9-.3-5.6-3-5.9-5.9-.1-1.1.5-2 1.5-2.3Z" />
    </svg>
  );
}
