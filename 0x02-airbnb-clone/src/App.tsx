import "./main.scss";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./data.ts";

function App() {
  console.log(data);
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
    </div>
  );
}
export default App;
