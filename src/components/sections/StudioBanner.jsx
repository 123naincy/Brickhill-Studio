import studio_image from "../../assets/banner-cta.jpg";
export default function StudioBanner() {
  return (
    <section className="studio-banner-wrapper">
      <div className="studio-banner">

        {/* Background image */}
        <img
          src={studio_image}
          alt="Studio Production"
          className="studio-banner-bg"
        />

        {/* Dark overlay */}
        <div className="studio-banner-overlay" />

        {/* Content */}
        <div className="studio-banner-content">

          {/* Small preview image */}
          <img
            src={studio_image}
            alt="Studio Preview"
            className="studio-banner-thumb"
          />

          <h2>COMPLETE MEDIA PRODUCTION SPACE</h2>

          <p>
            From podcasts and reels to product shoots and live sessions , we deliver high-quality production with expert lighting, sound, and seamless execution.
          </p>

          <button className="studio-banner-btn">
            Book Your Session →
          </button>
        </div>
      </div>
    </section>
  );
}
