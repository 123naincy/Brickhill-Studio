import Hero from "../components/sections/Hero";
import StudioTabs from "../components/sections/StudioTabs";
import StudioMedia from "../components/sections/StudioMedia";
import StudioHighlights from "../components/sections/StudioHighlights";
import StudioBanner from "../components/sections/StudioBanner";
import StudioValues from "../components/sections/StudioValues";
export default function Home() {
  return (
    <>
      <Hero />
      <StudioTabs />
      <StudioMedia />
      <StudioHighlights />
     <StudioBanner />
     <StudioValues />
    </>
  );
}
