import React from "react";
import { Counter } from "./features/counter/Counter";
import { Form } from "./features/form/Form";
import { Footer } from "./features/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
