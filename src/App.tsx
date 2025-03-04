// Components
import { AppRouter } from "@/components/Router.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRouter />
    </Router>
  );
}

export default App;
