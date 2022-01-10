import Hero from "./components/Hero";
import How from "./components/How";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import GetInTouch from "./components/GetInTouch";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <How />
      <GetInTouch />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
