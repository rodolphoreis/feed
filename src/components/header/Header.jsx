import styles from "./header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <h1 className={styles.logo_box}>
          <span className={styles.logoText}>Dev</span>
          <span className={styles.logoText2}>Feed</span>
        </h1>
      </a>
    </header>
  );
}
