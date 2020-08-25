import React from 'react';
import './App.css';
import Number from "./components/Number";
import NumberState from "./context/NumberState";

const App = () => {
  return (
    <NumberState>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Simple Counter</h3>
            <hr />
            <Number />
            <p className="mt-5"><i>Using React and ContextAPI</i></p>
          </div>
        </div>
      </div>
    </NumberState>
  );
}

export default App;
