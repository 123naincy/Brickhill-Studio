import { useEffect, useRef } from "react";


export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dotRef.current.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;

      /* 3D spotlight position */
      lightRef.current.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ringRef.current.style.transform =
        `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={lightRef} className="cursor-light" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
