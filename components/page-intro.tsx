import { CTAButton } from "./cta-button";

type PageIntroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      <p>{description}</p>
      <CTAButton>Umów konsultację</CTAButton>
    </header>
  );
}
