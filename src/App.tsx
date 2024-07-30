// Components
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { FramerMain, FramerWrapper } from "./components/Framer";
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
    <FramerWrapper>
      <FramerMain
        className={styles.appBox}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Hero />
        <Separator />
        <About />
        <Experience />
        <Projects />
        <CTA />
        <Feedback />
        <Contacts />
        <Skills />
        <Footer />
      </FramerMain>
    </FramerWrapper>
  );
}

export default App;
