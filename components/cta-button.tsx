import { siteConfig } from "@/data/site-config";

interface CTAButtonProps {
  className?: string;
  children?: string;
}

export const CTAButton = (props: CTAButtonProps) => {
  const { className = "", children = "Umów konsultację" } = props;

  return (
    <a
      className={`button ${className}`}
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
