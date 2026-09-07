type BrandLogoProps = {
  variant?: "light" | "dark";
};

export default function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <span className="brand-logo-wordmark">
        <span className="brand-logo-name">Koshishein</span>
        <svg className="brand-logo-wave-overlay" viewBox="0 0 260 22" aria-hidden="true">
          <path d="M4 12C28 1 54 1 78 12S128 23 152 12S202 1 226 12S244 20 256 12" />
        </svg>
      </span>
    </span>
  );
}
