// Components
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/components/Router.tsx";

function App() {
  return (
    <main>
      <Router>
        <AppRouter />
      </Router>
    </main>
  )
}

export default App;
