// Components
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/components/Router.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { Footer } from "@/components/Footer.tsx";
import { Container } from "@/components/Container.tsx";

function App() {
  return (
    <Router>
      <div className="grid-main-container">
        <Navbar />
        <Container>
          <main className="py-12">
            <AppRouter />
          </main>
        </Container>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
