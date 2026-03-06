import { Breadcrumb as BootstrapBreadcrumb } from "react-bootstrap";

export default function Breadcrumb({ items }) {
  return (
    <div className="about-us-container">
      <BootstrapBreadcrumb>
        {items.map((item, index) => (
          <BootstrapBreadcrumb.Item 
            key={item.id || item.label} 
            active={index === items.length - 1}
          >
            {item.label}
          </BootstrapBreadcrumb.Item>
        ))}
      </BootstrapBreadcrumb>
    </div>
  );
}