import Image from "next/image";
import Link from "next/link";

import {
  handmadeCollection,
  plainStitchedCollection,
} from "@/data/collection";

type CatalogPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

export default async function CatalogPage({
  searchParams,
}: CatalogPageProps) {
  const params = await searchParams;
  const selectedProductId = params.product;

  const products = [
    ...handmadeCollection,
    ...plainStitchedCollection,
  ];

  const selectedProduct = selectedProductId
    ? products.find((product) => String(product.id) === selectedProductId)
    : null;

  return (
    <main>
      {/* Page Banner */}
      <section className="catalog-page-banner">
        <div className="container">
          <p className="section-eyebrow">N.A CLOTHING</p>

          <h1>Our Catalog</h1>

          <p>
            Explore our handmade designs and ready-to-wear dresses. Choose a
            design and contact us directly to place your order.
          </p>
        </div>
      </section>

      {/* Selected Product */}
      {selectedProduct ? (
        <section className="catalog-product-section">
          <div className="container">
            <Link href="/catalog" className="catalog-back-link">
              <span>←</span>
              Back to Catalog
            </Link>

            <div className="catalog-product-detail">
              <div className="catalog-product-image">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>

              <div className="catalog-product-content">
                <p className="section-eyebrow">N.A CLOTHING</p>

                <h2>{selectedProduct.name}</h2>

                <strong className="catalog-product-price">
                  PKR {selectedProduct.price.toLocaleString()}
                </strong>

                <p className="catalog-product-description">
                  {selectedProduct.description}
                </p>

                <div className="catalog-product-note">
                  <strong>Ordering Information</strong>

                  <p>
                    Contact us on WhatsApp to confirm availability, sizing,
                    delivery details, and your order.
                  </p>
                </div>

                <Link
                  href={`https://wa.me/923280547405?text=${encodeURIComponent(
                    `Assalamualaikum, I want to order ${selectedProduct.name}. Price: PKR ${selectedProduct.price.toLocaleString()}`
                  )}`}
                  className="primary-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* All Products */
        <section className="catalog-section">
          <div className="container">
            <div className="catalog-heading">
              <div>
                <p className="section-eyebrow">ALL DESIGNS</p>

                <h2>
                  Find your
                  <span>next favorite.</span>
                </h2>
              </div>

              <p>
                Browse our current designs and select any product to view its
                details and place an order.
              </p>
            </div>

            <div className="catalog-product-grid">
              {products.map((product) => (
                <article className="catalog-card" key={product.id}>
                  <Link
                    href={`/catalog?product=${product.id}`}
                    className="catalog-card-image"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  </Link>

                  <div className="catalog-card-info">
                    <div>
                      <h3>{product.name}</h3>

                      <p>{product.description}</p>
                    </div>

                    <strong>
                      PKR {product.price.toLocaleString()}
                    </strong>
                  </div>

                  <Link
                    href={`/catalog?product=${product.id}`}
                    className="catalog-card-link"
                  >
                    View Details
                    <span>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Stitching CTA */}
      <section className="catalog-stitching-cta">
        <div className="container">
          <p className="section-eyebrow">CUSTOM STITCHING</p>

          <h2>
            Have your own
            <span>fabric?</span>
          </h2>

          <p>
            Bring your own fabric and chosen design. Our stitching team can
            create a beautifully finished dress for PKR 1,200.
          </p>

          <Link href="/collection" className="primary-button">
            Explore Custom Stitching
          </Link>
        </div>
      </section>
    </main>
  );
}