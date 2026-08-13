import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Custom Stitching",
    description:
      "Send us your own fabric and we will stitch your chosen brand dress with careful fitting and neat finishing.",
    price: "PKR 1,200 / dress",
  },
  {
    number: "02",
    title: "Handmade Collection",
    description:
      "Explore our unique handmade designs inspired by Alif Clothing Brand, created for customers who love something special.",
    price: "Unique ready-to-wear designs",
  },
  {
    number: "03",
    title: "Plain Stitched Dresses",
    description:
      "Simple, elegant and comfortable ready-to-wear dresses designed for everyday use.",
    price: "Ready-to-wear",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        {/* Section heading */}
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">WHAT WE OFFER</p>

            <h2>
              Made with care.
              <span>Made for you.</span>
            </h2>
          </div>

          <p>
            From stitching your own fabric to ready-to-wear designs, N.A
            Clothing brings classic craftsmanship and simple elegance
            together.
          </p>
        </div>

        {/* Service cards */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-price">{service.price}</span>

                <Link href="/collection" className="service-link">
                  Explore
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}