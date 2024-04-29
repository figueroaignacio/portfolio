// Styles
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Let's work together</h2>
        <p>Thanks for visiting my website.</p>
        <p>Proudly developed by Ignacio Figueroa</p>
      </div>
      <div>
        <h2>Contact me</h2>
        <ul>
          <li>
            <a href="mailto:ignaciofigueroadev@gmail.com" target="_blank">
              Mail
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ignacio-figueroa-0a1ba0263/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/figueroaignacio" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>Built in React, CSS Modules and i18n</p>
      </div>
    </footer>
  );
}
