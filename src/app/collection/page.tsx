import Image from "next/image";
import Link from "next/link";
import {
  handmadeCollection,
  plainStitchedCollection,
} from "@/data/collection";

export default function CollectionPage() {
  return (
    <main>
      {/* Page Banner */}
      <section className="collection-page-banner">
        <div className="container">
          <p className="section-eyebrow">N.A CLOTHING</p>
          <h1>Our Collections</h1>
          <p>
            Discover our custom stitching service, handmade designs, and
            elegant ready-to-wear dresses.
          </p>
        </div>
      </section>

      {/* Custom Stitching */}
      <section className="collection-section custom-stitching-section">
        <div className="container">
          <div className="collection-intro">
            <div>
              <p className="section-eyebrow">CUSTOM STITCHING</p>

              <h2>
                Your fabric.
                <span>Our perfect stitch.</span>
              </h2>
            </div>

            <div>
              <p>
                Bring your own fabric and chosen brand design. Our experienced
                stitching team will turn it into a beautifully finished dress.
              </p>

              <div className="stitching-price">
                <strong>PKR 1,200</strong>
                <span>per dress</span>
              </div>

              <p className="collection-note">
                Fabric and delivery charges are separate.
              </p>

              <Link
                href="https://wa.me/923280547405?text=Assalamualaikum%2C%20I%20want%20to%20book%20custom%20stitching.%20Stitching%201200%20PKR"
                className="primary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Stitching
              </Link>
            </div>
          </div>

          <div className="stitching-gallery">
  <div className="stitching-gallery-main">
    <Image
      src="/images/products/modern-taupe-black-embroidery.jpg"
      alt="Custom stitching sample"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>

  <div className="stitching-gallery-medium">
    <Image
      src="/images/products/classic-black-solo.jpg"
      alt="Custom stitching sample"
      fill
      sizes="(max-width: 768px) 50vw, 30vw"
    />
  </div>

  <div className="stitching-gallery-small">
    <Image
      src="/images/products/floral-navy-maxi.jpg"
      alt="Custom stitching sample"
      fill
      sizes="(max-width: 768px) 50vw, 20vw"
    />
  </div>
</div>
        </div>
      </section>

      {/* Handmade Collection */}
      <section className="collection-section handmade-section">
        <div className="container">
          <div className="collection-heading">
            <div>
              <p className="section-eyebrow">N.A UNIQUE COLLECTION</p>

              <h2>
                Handmade designs
                <span>by Alif Clothing Brand.</span>
              </h2>
            </div>

            <p>
              Explore our unique handmade designs, created for customers who
              appreciate elegant details and timeless style.
            </p>
          </div>

          <div className="collection-product-grid">
            {handmadeCollection.map((product) => (
              <article className="collection-product-card" key={product.id}>
                <Link
                  href={`/catalog?product=${product.id}`}
                  className="collection-product-image"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </Link>

                <div className="collection-product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>

                  <strong>PKR {product.price.toLocaleString()}</strong>
                </div>

                <Link
                  href={`/catalog?product=${product.id}`}
                  className="product-order-link"
                >
                  View & Order
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plain Stitched */}
      <section className="collection-section plain-section">
        <div className="container">
          <div className="collection-heading">
            <div>
              <p className="section-eyebrow">PLAIN STITCHED DRESSES</p>

              <h2>
                Simple.
                <span>Elegant. Everyday.</span>
              </h2>
            </div>

            <p>
              Comfortable ready-to-wear dresses designed for everyday use,
              with the neat stitching N.A Clothing is known for.
            </p>
          </div>

          <div className="collection-product-grid">
            {plainStitchedCollection.map((product) => (
              <article className="collection-product-card" key={product.id}>
                <Link
                  href={`/catalog?product=${product.id}`}
                  className="collection-product-image"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </Link>

                <div className="collection-product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>

                  <strong>PKR {product.price.toLocaleString()}</strong>
                </div>

                <Link
                  href={`/catalog?product=${product.id}`}
                  className="product-order-link"
                >
                  View & Order
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}