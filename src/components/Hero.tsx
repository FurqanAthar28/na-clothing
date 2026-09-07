import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        {/* Left side: Main message */}
        <div className="hero-content">
          <p className="hero-eyebrow">TIMELESS WATCHES, CHOSEN WITH CARE</p>

          <h1>
            Watches That
            <span>Match Your Story</span>
          </h1>

          <p className="hero-description">
            Explore our signature and everyday collections, or send us your
            own watch for custom engraving and personalization.
          </p>

          <div className="hero-price">
            <span>Engraving from</span>
            <strong>PKR {siteConfig.engravingPrice}</strong>
            <span>per watch</span>
          </div>

          <div className="hero-actions">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Assalamualaikum, I want to order a watch."
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
              src="/images/hero-watch.jpg"
              alt="Koshishein signature steel watch"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="hero-image-label">
            <span>Koshishein</span>
            <small>WATCHES</small>
          </div>
        </div>
      </div>
    </section>
  );
}
