// Components
import { AppRouter } from "@/components/Router.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <AppRouter />
    </Router>
  );
}

export default App;
