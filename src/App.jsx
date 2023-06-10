import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import OutletComponent from "./components/OutletComponent";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OutletComponent />}>
        <Route path="" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/projects/react" element={<Projects />} />
        <Route path="/projects/HTML-CSS" element={<Projects />} />
        <Route path="/projects/typescript" element={<Projects />} />
        <Route path="/projects/next" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
