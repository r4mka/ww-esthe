import styles from "./testimonial.module.css";

type TestimonialProps = {
  quote: string;
  author: string;
};

export const Testimonial = ({ quote, author }: TestimonialProps) => (
  <blockquote className={styles.testimonial}>
    <p>“{quote}”</p>
    <cite>{author}</cite>
  </blockquote>
);