// import BikeTracker from "./components/messy/BikeTracker";
// import CarTracker from "./components/messy/CarTracker";
import MouseTracker from "./solve-with-pattern/MouseTracker";

function App() {
  return (
    <div className="flex flex-col items-center m-2">
      {/* <CarTracker />
            <BikeTracker /> */}

      {/* car */}
      <MouseTracker
        render={(pos) => (
          <p>
            🚗 Car is at ({pos.x}, {pos.y})
          </p>
        )}
      />

      {/* bike */}
      <MouseTracker
        render={(pos) => (
          <p>
            🏍️ Bike is at ({pos.x}, {pos.y})
          </p>
        )}
      />
    </div>
  );
}

export default App;
