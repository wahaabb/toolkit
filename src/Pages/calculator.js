import React, { useState } from "react";
import "../Styles/Pages/calculator.css";


const Calculator = () => {
  const [display, setDisplay] = useState("");

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = eval(display);
      if (isNaN(result) || result === Infinity) {
        throw new Error("Invalid Calculation");
      }
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const sqrt = () => {
    const result = Math.sqrt(parseFloat(display));
    setDisplay(result.toString());
  };

  const calculateSqr = () => {
    const result = Math.pow(parseFloat(display), 2);
    setDisplay(result.toString());
  };

  const calculateCube = () => {
    const result = Math.pow(parseFloat(display), 3);
    setDisplay(result.toString());
  };

  const calculateSin = () => {
    const result = Math.sin(parseFloat(display) * (Math.PI / 180));
    setDisplay(result.toString());
  };

  const calculateCos = () => {
    const result = Math.cos(parseFloat(display) * (Math.PI / 180));
    setDisplay(result.toString());
  };

  const calculateTan = () => {
    const result = Math.tan(parseFloat(display) * (Math.PI / 180));
    setDisplay(result.toString());
  };

  const isOperator = (char) => {
    return ["+", "-", "*", "/","."].includes(char);
  };

  const updateDisplay = (value) => {
    if (display === "Error" || display === "NaN") {
      setDisplay(value);
      return;
    }

    if (value === "00" && (display === "" || isOperator(display[display.length - 1]))) {
      return; 
    }

    if (isOperator(value) && isOperator(display[display.length - 1])) {
      return; 
    }

    setDisplay(display + value);
  };

  return (
    <>
 
    <div className="cal">
      <div className="calculator mt-5 mb-5">
        <input type="text" value={display} className="display"  disabled />

        <div className="buttons">
          <button className="function-btn" onClick={clearDisplay}>
            C
          </button>
          <button className="function-btn" onClick={deleteLast}>
            ⌫
          </button>
          <button
            disabled={display.length === 0}
            className="function-btn"
            onClick={calculateSqr}
          >
            x²
          </button>
          <button
            disabled={display.length === 0}
            className="function-btn"
            onClick={calculateCube}
          >
            x³
          </button>

          <button onClick={() => updateDisplay("7")}>7</button>
          <button onClick={() => updateDisplay("8")}>8</button>
          <button onClick={() => updateDisplay("9")}>9</button>
          <button className="operator-btn" disabled={display.length === 0} onClick={() => updateDisplay("/")}>
            /
          </button>

          <button onClick={() => updateDisplay("4")}>4</button>
          <button onClick={() => updateDisplay("5")}>5</button>
          <button onClick={() => updateDisplay("6")}>6</button>
          <button className="operator-btn" disabled={display.length === 0} onClick={() => updateDisplay("*")}>
            *
          </button>

          <button onClick={() => updateDisplay("1")}>1</button>
          <button onClick={() => updateDisplay("2")}>2</button>
          <button onClick={() => updateDisplay("3")}>3</button>
          <button className="operator-btn" onClick={() => updateDisplay("-")}>
            −
          </button>

          <button onClick={() => updateDisplay("0")}>0</button>
          <button onClick={() => updateDisplay("00")}>00</button>
          <button onClick={() => updateDisplay(".")}>.</button>
          <button className="operator-btn" onClick={() => updateDisplay("+")}>
            +
          </button>

          <button className="function-btn" onClick={sqrt} disabled={display === ""}>
            √
          </button>
          <button
            className="function-btn"
            disabled={display.length === 0}
            onClick={calculateSin}
          >
            sin
          </button>
          <button
            className="function-btn"
            disabled={display.length === 0}
            onClick={calculateCos}
          >
            cos
          </button>
          <button
            className="function-btn"
            disabled={display.length === 0}
            onClick={calculateTan}
          >
            tan
          </button>

          <button className="equal-btn" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Calculator;
