import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Gallery from "./components/sections/Gallery";
import Home from "./components/sections/Home";
import Services from "./components/sections/Services";
import NavBar from "./navigation/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
