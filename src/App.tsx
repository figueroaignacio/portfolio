// Components
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Separator } from "./components/Separator/Separator";

// Styles
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.appBox}>
      <Hero />
      <Separator />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;
