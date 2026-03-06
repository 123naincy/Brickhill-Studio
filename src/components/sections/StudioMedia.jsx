import { useRef, useState } from "react";
import podcast from "../../assets/Podcast Production.jpg";
import podcast_video from "../../assets/podcast-production.mp4";
import reels from "../../assets/Reel & Content Shoot.jpg";
import reels_video from "../../assets/reel-shoot.mp4";
import photography from "../../assets/Photography Sessions.jpg";
import photography_video from "../../assets/photography.mp4";
import live from "../../assets/Live Broadcasting.jpg";
import live_video from "../../assets/inside-bhl.mp4";
import { Container, Row, Col } from "react-bootstrap";

const items = [
  {
    title: "Podcast Production",
    subtitle: "Multi-camera recording & studio-grade audio",
    image: podcast,
    video: podcast_video,
  },
  {
    title: "Reel & Content Shoot",
    subtitle: "Cinematic vertical videos for social media",
    image: reels,
    video: reels_video,
  },
  {
    title: "Photography Sessions",
    subtitle: "Portrait, product & branding photography",
    image: photography,
    video: photography_video,
  },
  {
    title: "Live Broadcasting",
    subtitle: "Real-time streaming with pro switching",
    image: live,
    video: live_video,
  },
];

export default function StudioMedia() {
  const videoRefs = useRef([]);
  const [loadingStates, setLoadingStates] = useState({});
  const [errorStates, setErrorStates] = useState({});

  const handleEnter = (i) => {
    const video = videoRefs.current[i];
    if (video && !errorStates[i]) {
      video.currentTime = 0;
      video.play().catch((err) => {
        console.warn(`Video ${i} failed to play:`, err);
        setErrorStates((prev) => ({ ...prev, [i]: true }));
      });
    }
  };

  const handleLeave = (i) => {
    const video = videoRefs.current[i];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleVideoLoadStart = (i) => {
    setLoadingStates((prev) => ({ ...prev, [i]: true }));
  };

  const handleVideoCanPlay = (i) => {
    setLoadingStates((prev) => ({ ...prev, [i]: false }));
  };

  const handleVideoError = (i) => {
    console.error(`Video ${i} failed to load`);
    setErrorStates((prev) => ({ ...prev, [i]: true }));
    setLoadingStates((prev) => ({ ...prev, [i]: false }));
  };

  return (
    <section className="studio-media-section">
      <Container>
        {/* Heading */}
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              <h2 className="section-title">
               Built for Modern Content Creators
              </h2>

              <p className="section-subtitle mx-auto">
            From multi-camera podcast setups to cinematic reel shoots and live broadcasting, we provide everything you need to produce professional, high-impact content effortlessly.
              </p>
            </div>
          </Col>
        </Row>

        {/* Cards */}
        <Row className="g-3">
          {items.map((item, i) => (
            <Col key={i} lg={3} md={6} xs={12}>
              <div
                className="studio-media-card"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                {/* Image */}
                <img src={item.image} alt={item.title} />

                {/* Loading Indicator */}
                {loadingStates[i] && (
                  <div className="video-loading-indicator">
                    <div className="spinner-sm"></div>
                  </div>
                )}

                {/* Video */}
                {!errorStates[i] && (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={item.video}
                    muted
                    loop
                    playsInline
                    onLoadStart={() => handleVideoLoadStart(i)}
                    onCanPlay={() => handleVideoCanPlay(i)}
                    onError={() => handleVideoError(i)}
                  />
                )}

                {/* Overlay */}
                <div className="studio-media-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}