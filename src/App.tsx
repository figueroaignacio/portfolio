// Components
import { Footer } from "./components/Footer/Footer";
import { FadeUp } from "./components/FramerAnimations/FadeUp";
import { Separator } from "./components/Separator/Separator";
import { About } from "./sections/About/About";
import { CTA } from "./sections/CTA/CTA";
import { Experience } from "./sections/Experience/Experience";
import { Feedback } from "./sections/Feedback/Feedback";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";

// Styles
import styles from "./App.module.css";

function App() {
  return (
    <FadeUp>
      <main className={styles.appBox}>
        <Hero />
        <Separator />
        <About />
        <Experience />
        <Projects />
        <CTA />
        <Feedback />
        <Skills />
        <Footer />
      </main>
    </FadeUp>
  );
}

export default App;
