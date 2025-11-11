import { useRef, useState } from "react";

const TestCounter = () => {
  let count = 0; // normal variable
  const [, setTick] = useState(0);
   const countRef = useRef(0); // ref variable

  const handleClick = () => {
    count++;
    console.log(count);
    console.log(countRef)
    setTick(t => t + 1);
  };

 

  const handleClickTWO = () => {
    countRef.current++;
    console.log(countRef.current);
    setTick(t => t + 1);
  };


    return (
        <div>
            <button onClick={handleClick}>Increase</button>
             <button onClick={handleClickTWO}>UseIncrse</button>;

        </div>
    );
};

export default TestCounter;