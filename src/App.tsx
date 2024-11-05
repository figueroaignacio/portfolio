// Components
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/components/Router.tsx";
import { Navbar } from "@/components/Navbar.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <AppRouter />
      </main>
    </Router>
  )
}

export default App;
