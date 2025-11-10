import Counter from "./state-ref/components/Counter";
import AutoFocusInput from "./state-ref/components/AutoFocusInput";


function App() {
  return (
    <div className="flex flex-col items-center">
      <Counter />
      <AutoFocusInput />
    </div>
  );
}

export default App;
