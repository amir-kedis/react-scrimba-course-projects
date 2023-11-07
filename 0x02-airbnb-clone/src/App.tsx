import "./main.scss";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardCarousel from "./components/CardCarousel";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <CardCarousel />
    </div>
  );
}
export default App;
