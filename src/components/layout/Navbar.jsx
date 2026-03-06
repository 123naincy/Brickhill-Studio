import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import CloseButton from "react-bootstrap/CloseButton";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const socials = [
    { icon: Facebook, link: "https://facebook.com" },
    { icon: Instagram, link: "https://instagram.com" },
    { icon: Linkedin, link: "https://linkedin.com" },
    { icon: Twitter, link: "https://twitter.com" },
    { icon: Youtube, link: "https://youtube.com" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="BHL Studioz Logo" className="logo-img" />
        </Link>

        {/* Social Icons */}
        <div className="nav-socials">
          {socials.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="nav-social-icon"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.15 }}
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>

        {/* Menu button */}
        <button className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <div className="sidebar-header">
                <CloseButton onClick={() => setOpen(false)} />
              </div>

              {/* Navigation Links */}
              <div className="sidebar-links">
                <button onClick={() => handleNavigation("/")}>
                  Home
                </button>

                <button onClick={() => handleNavigation("/about")}>
                  About
                </button>

                <button onClick={() => handleNavigation("/services")}>
                  Services
                </button>

                <button onClick={() => handleNavigation("/portfolio")}>
                  Portfolio
                </button>

                <button onClick={() => handleNavigation("/contact")}>
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}