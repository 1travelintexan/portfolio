import { Outlet } from "react-router-dom";
import Technologies from "./Technologies";
import Footer from "./Footer";
import CollapsibleExample from "./Navbar";
import Header from "./Header";
function OutletComponent() {
  return (
    <div className="dark">
      <Header />
      <CollapsibleExample />
      <Technologies />
      <Outlet />
      <Footer />
    </div>
  );
}

export default OutletComponent;
