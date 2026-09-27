import { siteConfig } from "@/data/site-config";

interface CTAButtonProps {
  className?: string;
  children?: string;
  href?: string;
}

export const CTAButton = (props: CTAButtonProps) => {
  const {
    className = "",
    children = "Umów konsultację",
    href = siteConfig.bookingUrl,
  } = props;

  return (
    <a
      className={`button ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
