import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePage/Home";
import About from "./Pages/About/About";
import FoodCard from "./Pages/Services/Service";

// function App() {
//   return (
//   );
// }

// export default App;

function App() {
  return (
    <div
    
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <FoodCard name="Pizza" price="399" image="/assets/logo.png" />
      <FoodCard name="Burger" price="199" image="/assets/sale-badge.png" />
      <FoodCard name="Pasta" price="299" image="/assets/pricing-bg.jpg" />
      <div className="App">
        <Home />
        <About />
      </div>
    </div>
  );
}
export default App;
