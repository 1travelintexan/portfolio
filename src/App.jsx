import { Route, Routes } from "react-router-dom";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import OutletComponent from "./components/OutletComponent";
import Testimonials from "./pages/Testimonials";
import TypescriptProjects from "./pages/TypescriptProjects";
import HtmlProjects from "./pages/HtmlProjects";
import ReactProjects from "./pages/ReactProjects";
import SsrProjects from "./pages/SsrProjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OutletComponent />}>
        <Route path="" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/projects/react" element={<ReactProjects />} />
        <Route path="/projects/HTML-CSS" element={<HtmlProjects />} />
        <Route path="/projects/typescript" element={<TypescriptProjects />} />
        <Route path="/projects/ssr" element={<SsrProjects />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
