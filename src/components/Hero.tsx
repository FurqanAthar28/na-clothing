import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        {/* Left side: Main message */}
        <div className="hero-content">
          <p className="hero-eyebrow">CLASSIC STITCHING SINCE 1990</p>

          <h1>
            Classic Stitching
            <span>for Your Chosen Brand Dress</span>
          </h1>

          <p className="hero-description">
            Bring your own fabric and let us create a beautifully stitched
            dress with the fitting and finishing you expect.
          </p>

          <div className="hero-price">
            <span>Stitching from</span>
            <strong>PKR {siteConfig.stitchingPrice}</strong>
            <span>per dress</span>
          </div>

          <div className="hero-actions">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Assalamualaikum, I want to order a dress. Stitching is PKR 1200."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Order on WhatsApp
            </a>

            <Link href="/collection" className="button button-secondary">
              Explore Collection
            </Link>
          </div>
        </div>

        
        <div className="hero-image-wrapper">
          <div className="hero-image">
            <Image
              src="/images/products/deep-burgundy-classic.jpg"
              alt="N.A Clothing classic stitched dress"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="hero-image-label">
            <span>N.A</span>
            <small>CLOTHING BRAND</small>
          </div>
        </div>
      </div>
    </section>
  );
}