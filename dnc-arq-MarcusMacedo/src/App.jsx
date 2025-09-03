import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { use, useContext } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/Contact";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

// Utils
import ScrollTop from "./utils/ScrollTop";
import { AppContext } from "./components/contexts/AppContext";

function App() {
  const appContext = useContext(AppContext);

  if (appContext.loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
