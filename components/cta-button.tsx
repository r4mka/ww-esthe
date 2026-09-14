interface CTAButtonProps {
  className?: string;
  children?: string;
}

export const CTAButton = (props: CTAButtonProps) => {
  const { className = "", children = "Umów konsultację" } = props;

  return (
    <a
      className={`button ${className}`}
      href="https://ig.me/m/wiktoria.warylak.esthe"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
