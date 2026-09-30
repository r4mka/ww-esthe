import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  id: string;
  title: string;
  className?: string;
  description?: string;
  eyebrow?: string;
  headingClassName?: string;
};

export const PageSection = ({
  children,
  id,
  title,
  className = "",
  description,
  eyebrow,
  headingClassName = "",
}: PageSectionProps) => {
  const titleId = `${id}-title`;

  return (
    <section
      className={`section-shell ${className}`}
      id={id}
      aria-labelledby={titleId}
    >
      <header className={`section-heading ${headingClassName}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={titleId}>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      {children}
    </section>
  );
};
