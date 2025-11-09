import styles from "./Hero.module.css";

const heroHighlights = [
  "Lightweight Metal Expertise",
  "End-to-End Engineering (Design → Simulation → Serial Production)",
  "High-Performance Results (Strength, efficiency, certification)",
];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroInner}>
        <p className={styles.tag}>REEMS</p>
        <h1 className={styles.headline}>Race &amp; Engineering Elite Manufacturing Services</h1>
        <p className={styles.subheadline}>
          Advanced magnesium, aluminium and titanium solutions for high-performance automotive,
          aerospace and industrial applications.
        </p>
        <p className={styles.description}>
          REEMS combines engineering, proprietary forging and additive technologies to deliver
          ultra-light, high-strength components — from forged wheels to aerospace brackets and
          complex 3D-printed parts.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.primaryButton} href="#capabilities">
            Explore capabilities
          </a>
          <a className={styles.secondaryButton} href="#contact">
            Request a project review
          </a>
        </div>
      </div>
      <aside className={styles.heroAside}>
        <p className={styles.secondaryDescription}>
          REEMS facilitates manufacturing services for high-performance industries — from
          motorsport to aerospace — specializing in forged magnesium &amp; aluminum components,
          advanced prototyping, and full production solutions.
        </p>
        <ul className={styles.featureList}>
          {heroHighlights.map((item) => (
            <li key={item} className={styles.featureItem}>
              {item}
            </li>
          ))}
        </ul>
        <a className={styles.calloutButton} href="#contact">
          Start your project
        </a>
      </aside>
    </section>
  );
}
