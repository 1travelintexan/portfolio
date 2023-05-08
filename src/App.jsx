import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import CollapsibleExample from "./components/Navbar";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <CollapsibleExample />
      <Technologies />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
