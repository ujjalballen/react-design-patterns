// import Counter from "./state-ref/components/Counter";
// import AutoFocusInput from "./state-ref/components/AutoFocusInput";

// import TestCounter from "./components/hooks/UseRefExample/TestCounter";
import ControlledForm from "./controlled/ControlledForm";
// import FeedbackForm from "./messy/FeedbackForm";
// import CounterWithRef from "./state-ref/components/CounterWithRef";


function App() {
  return (
    <div className="flex flex-col items-center">
      {/* <Counter />
      <AutoFocusInput /> */}
      {/* <TestCounter /> */}
      {/* <FeedbackForm /> */}

      <ControlledForm/>
    </div>
  );
}

export default App;
