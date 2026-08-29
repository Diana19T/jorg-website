import styles from "./CollectionSection.module.css";

type CollectionSectionProps = {
  heading: string;
  headingColor: string;
  body: string;
  bodyColor: string;
  bodyWidth: number;
  buttonLabel?: string;
};

export function CollectionSection({
  heading,
  headingColor,
  body,
  bodyColor,
  bodyWidth,
  buttonLabel,
}: CollectionSectionProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading} style={{ color: headingColor }}>
        {heading}
      </h2>
      <p className={styles.body} style={{ color: bodyColor, width: bodyWidth }}>
        {body}
      </p>
      {buttonLabel && (
        <button type="button" className={styles.button} style={{ color: headingColor }}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
