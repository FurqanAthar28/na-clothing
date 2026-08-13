import Image from "next/image";
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="about-snippet">
      <div className="container about-snippet-inner">
        <div className="about-snippet-image">
          <Image
            src="/images/founder.jpg"
            alt="Founder of N.A Clothing Brand"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

        <div className="about-snippet-content">
          <p className="section-eyebrow">OUR STORY</p>

          <h2>
            A legacy of
            <span>classic stitching.</span>
          </h2>

          <p>
            Nasreen Akhtar began her stitching journey in 1990, earning trust
            through perfect fitting and neat finishing. Today, her daughter
            carries that legacy forward and brings N.A Clothing to customers
            across Pakistan.
          </p>

          <p>
            You provide the fabric. We provide the perfect stitch — with
            classic craftsmanship at just PKR 1,200 per dress.
          </p>

          <Link href="/about" className="text-link">
            Read Our Story
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}