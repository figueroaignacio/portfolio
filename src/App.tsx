// Components
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/components/Router.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { Footer } from "@/components/Footer.tsx";

function App() {
  return (
    <Router>
      <div className="grid-main-container">
        <Navbar />
        <main className="container max-w-4xl mx-auto px-4 lg:px-0 relative">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
