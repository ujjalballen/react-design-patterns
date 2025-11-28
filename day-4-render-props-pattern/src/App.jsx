import BikeTracker from "./components/messy/BikeTracker";
import CarTracker from "./components/messy/CarTracker";



function App() {
    return (
        <div className="flex flex-col items-center m-2">
            <CarTracker />
            <BikeTracker />
        </div>
    );
}

export default App;
