import { useState } from "react";

const Toggle = ({ backFunction }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>{backFunction(isOpen, setIsOpen)}</div>
      {isOpen && (
        <p className="border border-amber-200 p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          quisquam quae, nobis nostrum accusamus deleniti cumque, illo totam sit
          fugit cupiditate culpa. Facere, veritatis repellendus ex, aspernatur
          earum asperiores minima quo odit reprehenderit cumque esse est
          sapiente eum temporibus ullam autem quisquam officia error repudiandae
          iure enim quae soluta cupiditate!
        </p>
      )}
    </div>
  );
};

export default Toggle;
