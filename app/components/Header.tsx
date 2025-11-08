"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navigationItems = [
  { href: "#top", label: "Home" },
  { href: "#market-segments", label: "Market Segments" },
  { href: "#lifecycle", label: "Lifecycle" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#wheels", label: "Wheels" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("top");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} onClick={() => scrollToSection("#top")}>
          REEMS<span className={styles.logoAccent}>.</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`${styles.navButton} ${isActive ? styles.navButtonActive : ""}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className={styles.mobileButton}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
