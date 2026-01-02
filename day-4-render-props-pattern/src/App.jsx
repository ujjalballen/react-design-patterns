// import BikeTracker from "./components/messy/BikeTracker";
// import CarTracker from "./components/messy/CarTracker";
// import MouseTracker from "./solve-with-pattern/MouseTracker";

import Toggle from "./task/Toggle";

// import MouseTrackerWithChildren from "./solve-with-pattern/using-children/TrackerWithChildren";

function App() {
  return (
    <div className="flex flex-col items-center m-2">
      {/* <CarTracker />
            <BikeTracker /> */}

      {/* car
      <MouseTracker
        render={(pos) => (
          <p>
            🚗 Car is at ({pos.x}, {pos.y})
          </p>
        )}
      />

      {/* bike */}
      {/* <MouseTracker
        render={(pos) => (
          <p>
            🏍️ Bike is at ({pos.x}, {pos.y})
          </p>
        )}
      />  */}

      {/* <MouseTrackerWithChildren>
        {(pos) => (
          <p>
            🏍️ Bike is at ({pos.x}, {pos.y})
          </p>
        )}
      </MouseTrackerWithChildren>
      <MouseTrackerWithChildren>
        {(pos) => (
          <p>
            🚗 Car is at ({pos.x}, {pos.y})
          </p>
        )}
      </MouseTrackerWithChildren> */}

      <Toggle
        backFunction={(isOpen, setIsOpen) => (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 bg-amber-400 border-2 rounded-2xl"
          >
            Open Me
          </button>
        )}
      />

    </div>
  );
}

export default App;
