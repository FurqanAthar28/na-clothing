const steps = [
  {
    number: "01",
    title: "Send Your Fabric",
    description:
      "Send your chosen brand fabric to us for custom stitching.",
  },
  {
    number: "02",
    title: "Share Your Size",
    description:
      "Share your measurements or size details with us on WhatsApp.",
  },
  {
    number: "03",
    title: "We Stitch",
    description:
      "Our experienced stitching team carefully prepares your dress.",
  },
  {
    number: "04",
    title: "We Deliver",
    description:
      "Once your dress is ready, we send it to you across Pakistan.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-heading how-it-works-heading">
          <div>
            <p className="section-eyebrow">HOW IT WORKS</p>

            <h2>
              From your fabric
              <span>to your finished dress.</span>
            </h2>
          </div>

          <p>
            Getting your chosen dress stitched with N.A Clothing is simple.
            Just follow four easy steps.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>

              <div className="step-line" />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="how-it-works-note">
          <strong>Custom stitching: PKR 1,200 per dress.</strong>
          <span>
            Fabric and delivery charges are separate.
          </span>
        </div>
      </div>
    </section>
  );
}