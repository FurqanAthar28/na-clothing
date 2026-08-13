import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Page Banner */}
      <section className="about-page-banner">
        <div className="container">
          <p className="section-eyebrow">N.A CLOTHING</p>

          <h1>Made with care.</h1>

          <p>
            A clothing brand built around thoughtful stitching, elegant
            designs, and everyday style.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-image">
              <Image
                src="/images/products/modern-taupe-black-embroidery.jpg"
                alt="N.A Clothing design"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            <div className="about-story-content">
              <p className="section-eyebrow">OUR STORY</p>

              <h2>
                Clothing made
                <span>with intention.</span>
              </h2>

              <p>
                N.A Clothing is built around a simple idea: good clothing
                should feel personal. From the fabric you choose to the final
                stitch, every detail deserves attention.
              </p>

              <p>
                We offer custom stitching alongside carefully selected
                ready-to-wear designs, giving our customers the freedom to
                choose what suits their style and everyday needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-services-section">
        <div className="container">
          <div className="about-section-heading">
            <div>
              <p className="section-eyebrow">WHAT WE DO</p>

              <h2>
                From your fabric
                <span>to the final stitch.</span>
              </h2>
            </div>

            <p>
              Whether you bring your own fabric or choose from our collections,
              we focus on creating clothing with a clean finish and timeless
              appeal.
            </p>
          </div>

          <div className="about-services-grid">
            <article className="about-service-card">
              <span className="about-service-number">01</span>

              <div>
                <h3>Custom Stitching</h3>

                <p>
                  Bring your fabric and preferred design. Our stitching team
                  turns it into a carefully finished dress.
                </p>

                <Link href="/collection" className="service-link">
                  Learn More
                  <span>→</span>
                </Link>
              </div>
            </article>

            <article className="about-service-card">
              <span className="about-service-number">02</span>

              <div>
                <h3>Handmade Designs</h3>

                <p>
                  Unique designs created with attention to detail for customers
                  who appreciate distinctive and elegant clothing.
                </p>

                <Link href="/collection" className="service-link">
                  Explore Designs
                  <span>→</span>
                </Link>
              </div>
            </article>

            <article className="about-service-card">
              <span className="about-service-number">03</span>

              <div>
                <h3>Ready to Wear</h3>

                <p>
                  Simple, comfortable stitched dresses designed for everyday
                  wear without compromising on neat finishing.
                </p>

                <Link href="/collection" className="service-link">
                  View Collection
                  <span>→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values-section">
        <div className="container">
          <div className="about-values-heading">
            <p className="section-eyebrow">OUR APPROACH</p>

            <h2>
              Simple principles.
              <span>Beautiful results.</span>
            </h2>
          </div>

          <div className="about-values-grid">
            <article className="about-value">
              <span>01</span>

              <h3>Quality</h3>

              <p>
                We believe quality starts with careful work and continues
                through every detail of the finished garment.
              </p>
            </article>

            <article className="about-value">
              <span>02</span>

              <h3>Craftsmanship</h3>

              <p>
                Good stitching is more than putting fabric together. It is
                about precision, finishing, and attention to detail.
              </p>
            </article>

            <article className="about-value">
              <span>03</span>

              <h3>Timeless Style</h3>

              <p>
                Our designs are created to remain elegant beyond changing
                trends and work naturally in everyday wardrobes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="about-craft-section">
        <div className="container">
          <div className="about-craft">
            <div className="about-craft-content">
              <p className="section-eyebrow">THE N.A APPROACH</p>

              <h2>
                The details
                <span>matter.</span>
              </h2>

              <p>
                Every garment is an opportunity to get the small things right.
                From the way a design comes together to the final finishing,
                our focus is on creating clothing that looks refined and feels
                comfortable to wear.
              </p>

              <p>
                That attention to detail is what connects our custom stitching
                service with our handmade and ready-to-wear collections.
              </p>
            </div>

            <div className="about-craft-image">
              <Image
                src="/images/products/classic-black-solo.jpg"
                alt="N.A Clothing craftsmanship"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <p className="section-eyebrow">DISCOVER N.A CLOTHING</p>

          <h2>
            Find something
            <span>made for you.</span>
          </h2>

          <p>
            Explore our handmade designs, ready-to-wear dresses, and custom
            stitching service.
          </p>

          <Link href="/collection" className="primary-button">
            Explore Our Collections
          </Link>
        </div>
      </section>
    </main>
  );
}