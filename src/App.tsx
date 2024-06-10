// Components
import { Footer } from "./components/Footer/Footer";
import { Separator } from "./components/Separator/Separator";
import { About } from "./sections/About/About";
import { CallToAction } from "./sections/CallToAction/CallToAction";
import { Experience } from "./sections/Experience/Experience";
import { Feedback } from "./sections/Feedback/Feedback";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";

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
      <CallToAction />
      <Separator />
      <Feedback />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
