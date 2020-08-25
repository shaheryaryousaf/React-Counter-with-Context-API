import React, { useContext } from 'react';
import numberContext from "../context/numberContext";

const Number = () => {

    const numberCounter = useContext(numberContext);
    const { number, addNumber, minusNumber, reset } = numberCounter;

    return (
        <div>
            <h1>{number}</h1>
            <div className="btns mt-3">
                <button className="btn btn-success" onClick={e => addNumber(e)}>+</button> &nbsp;
                <button className="btn btn-danger" onClick={e => minusNumber(e)}>-</button> &nbsp;
                <button className="btn btn-primary" onClick={e => reset(e)}>Reset</button>
            </div>
        </div>
    );
}

export default Number;
