// Components
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Feedback } from "./components/Feedback/Feedback";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Separator } from "./components/Separator/Separator";
import { Skills } from "./components/Skills/Skills";

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
      <Feedback />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
