import { useRef } from "react";
import { Sparkles } from "lucide-react";


export default function HeroBadgeMagic() {
  const containerRef = useRef(null);

  const explodeStars = (e) => {
    const container = containerRef.current;

    for (let i = 0; i < 6; i++) {
      const star = document.createElement("span");
      star.className = "magic-star";

      const angle = Math.random() * 360;
      const distance = 40 + Math.random() * 40;

      star.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      star.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

      container.appendChild(star);

      setTimeout(() => star.remove(), 700);
    }
  };

  return (
    <div
      ref={containerRef}
      className="hero-badge-magic"
      onMouseEnter={explodeStars}
    >
      <Sparkles size={16} className="magic-icon" />
      Creative Studio
    </div>
  );
}
