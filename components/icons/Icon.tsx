import type { ImgHTMLAttributes, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
type RasterIconProps = ImgHTMLAttributes<HTMLImageElement> & { size?: number };

/**
 * Header icons — cropped directly from the client-provided production sprite
 * sheet (`icons/Component 8.png`, matching Figma frame `4:1503`) at the exact
 * local coordinates Figma reports for each glyph:
 *   search -> (20, 92, 24, 24)   bag -> (92, 20, 24, 24)   user -> (92, 572, 24, 24)
 * These are the real production assets, not redrawn approximations.
 * Source sprite is native 24x24 (1x) — no higher-resolution export was provided.
 */
export function SearchIcon({ size = 24, alt = "Search", ...props }: RasterIconProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/icons/search.png" width={size} height={size} alt={alt} {...props} />;
}

export function BagIcon({ size = 24, alt = "Bag", ...props }: RasterIconProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/icons/bag.png" width={size} height={size} alt={alt} {...props} />;
}

export function UserIcon({ size = 24, alt = "Account", ...props }: RasterIconProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/icons/user.png" width={size} height={size} alt={alt} {...props} />;
}

/**
 * Footer newsletter-submit arrow (Footer node 54:3015, "Clip path group").
 * FLAGGED — MISSING ASSET: the provided archive contains no icon/SVG file
 * matching this glyph (only Header's `Component 8.png` sprite was supplied,
 * and this arrow isn't part of it). Hand-built placeholder below, sized/positioned
 * to match Figma. Replace with the real exported asset once available.
 */
export function ArrowRightIcon({ size = 14, ...props }: IconProps) {
  return (
    <svg width={size} height={(size * 12) / 14} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0.5 6H13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8.2 0.7L13.5 6L8.2 11.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Chevron used by mega-menu triggers on hover/open state. */
export function ChevronDownIcon({ size = 10, ...props }: IconProps) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
