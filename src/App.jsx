import React from "react";
import Counter from "./features/counter/Counter";

const App = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <Counter />
    </div>
  );
};

export default App;
