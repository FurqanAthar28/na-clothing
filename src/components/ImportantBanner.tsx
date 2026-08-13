import siteConfig from "@/data/siteConfig";

export default function ImportantBanner() {
  return (
    <div className="important-banner">
      <div className="container important-banner-inner">
        <p>
          Custom stitching on your own fabric —{" "}
          <strong>PKR {siteConfig.stitchingPrice} per dress.</strong>{" "}
          Fabric & delivery charges are separate.
        </p>
      </div>
    </div>
  );
}