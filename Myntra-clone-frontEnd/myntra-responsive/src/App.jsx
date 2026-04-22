import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Pages/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
