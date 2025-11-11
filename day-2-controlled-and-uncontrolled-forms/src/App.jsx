// import Counter from "./state-ref/components/Counter";
// import AutoFocusInput from "./state-ref/components/AutoFocusInput";

import TestCounter from "./components/hooks/UseRefExample/TestCounter";
import CounterWithRef from "./state-ref/components/CounterWithRef";


function App() {
  return (
    <div className="flex flex-col items-center">
      {/* <Counter />
      <AutoFocusInput /> */}
      <TestCounter />
    </div>
  );
}

export default App;
