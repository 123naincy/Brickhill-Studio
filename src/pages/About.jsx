import Breadcrumb from "../components/common/Breadcrumb";
import About from "../components/sections/About";

export default function AboutPage() {
  const breadcrumbItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "About" },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <About />
    </>
  );
}