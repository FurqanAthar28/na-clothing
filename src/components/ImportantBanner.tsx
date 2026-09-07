import siteConfig from "@/data/siteConfig";

export default function ImportantBanner() {
  return (
    <div className="important-banner">
      <div className="container important-banner-inner">
        <p>
          Custom engraving on your own watch —{" "}
          <strong>PKR {siteConfig.engravingPrice} per watch.</strong>{" "}
          Delivery charges are separate.
        </p>
      </div>
    </div>
  );
}
