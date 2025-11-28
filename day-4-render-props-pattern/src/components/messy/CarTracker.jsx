import { useState } from "react";

const CarTracker = () => {
    const [position, setPosition] = useState({x:0, y:0})

    function handleMouseMove(e){
        setPosition({x: e.clientX, y: e.clientY})
    }

    return (
        <div onMouseMove={handleMouseMove} className="border px-2 w-full h-48 my-2">
            <p> 🚗 car is at x: {position.x} and y: {position.y}</p>
        </div>
    );
};

export default CarTracker;