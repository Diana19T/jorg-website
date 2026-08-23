import styles from "./ImagePlaceholder.module.css";

type ImagePlaceholderProps = {
  className?: string;
  /** Accessible label describing the eventual photograph, for when a real <img> replaces this. */
  label?: string;
};

/**
 * Stand-in for Figma's raster image fills (all sampled at #ebebed).
 * The Figma MCP asset server is unreachable from this sandbox (no network egress),
 * so real photography could not be downloaded. Swap the returned <div> for an
 * <img>/<Image> once asset files are supplied — the surrounding layout,
 * dimensions, and object-fit behavior are already pixel-matched to Figma.
 */
export function ImagePlaceholder({ className, label }: ImagePlaceholderProps) {
  return <div className={`${styles.placeholder} ${className ?? ""}`} role="img" aria-label={label ?? ""} />;
}
