import "./App.css";
import Header from "./components/Header";
import RestaurantCards from "./components/RestaurantCards";

function App() {
  return (
    <div className="main">
      {/* Header
       - logo
       - Nav Items
      Body
       - Search
       - RestaurantContainer
       - RestaurantCard
      Footer
        - Copyright
        - Links
        - Address
        - Contact */}
      <Header />
      <div className="body">
        <div className="search">Search me</div>
        <div className="food-container">
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
        </div>
      </div>
    </div>
  );
}

export default App;
