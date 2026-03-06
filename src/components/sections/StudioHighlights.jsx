import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import location from "../../assets/prime-location.jpg";
import conference from "../../assets/confernece-room.jpg";
import camera from "../../assets/camera-support.jpg";
import editing from "../../assets/video-editing.jpg";

const highlights = [
  {
    title: "Prime Location – DLF Corporate Greens",
    desc: "Located inside DLF Corporate Greens, our studio offers a premium corporate environment that enhances your brand credibility. The professional surroundings instantly elevate the quality and perception of your content.",
    image: location,
  },
  {
    title: "Executive Conference Room",
    desc: "Our modern conference room is ideal for corporate meetings, interviews, and presentations. It provides a polished and professional setting that adds authority to your production.",
    image: conference,
  },
  {
    title: "Advanced Camera & Production Setup",
    desc: "With multi-camera systems, 4K recording, and studio-grade lighting, we deliver cinematic visuals every time. Your content is captured with precision and broadcast-level quality.",
    image: camera,
  },
  {
    title: "Complete Editing & Production Support",
    desc: "From recording to final output, we handle the entire production process seamlessly. You receive polished, platform-ready content without the hassle of managing multiple vendors.",
    image: editing,
  },
];

export default function StudioHighlights() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? highlights.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === highlights.length - 1 ? 0 : i + 1));

  const item = highlights[index];

  return (
    <section className="studio-highlights">
      <div className="container-xl">
        <div className="row g-4 align-items-stretch">

          {/* LEFT — BIG SLIDER */}
          <div className="col-lg-8">
            <div className="highlight-slider">

              <img src={item.image} alt={item.title} />

              <div className="highlight-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {/* arrows */}
              <button className="nav-btn left" onClick={prev}>
                <ChevronLeft size={20} />
              </button>

              <button className="nav-btn right" onClick={next}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT — NEWS LIST */}
          <div className="col-lg-4">
            <div className="highlight-list">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className={`highlight-item ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                >
                  <h5>{h.title}</h5>
                  <p>{h.desc.substring(0, 80)}...</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
