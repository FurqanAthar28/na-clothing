import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import siteConfig from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <BrandLogo variant="light" />
          </Link>

          <p>
            Signature and everyday watches, plus custom engraving, crafted
            with care.
          </p>

          <p className="footer-location">{siteConfig.location}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link href="/">Home</Link>
          <Link href="/collection">Collection</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/catalog">Catalog</Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <Link href="/collection">Engraving & Personalization</Link>
          <Link href="/collection">Signature Collection</Link>
          <Link href="/collection">Everyday Classics</Link>
          <Link href="/catalog">View Catalog</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>

          <span>{siteConfig.location}</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Koshishein. All rights reserved.</p>

        <div className="footer-socials">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
