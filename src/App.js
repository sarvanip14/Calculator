import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      currentInput: "",
      operator: null,
      previousInput: "",
    };
  }

  handleDigitClick = (digit) => {
    const { display, currentInput } = this.state;
    if (display === "0" || currentInput === display) {
      this.setState({
        display: digit,
        currentInput: digit,
      });
    } else {
      this.setState({
        display: display + digit,
        currentInput: currentInput + digit,
      });
    }
  };

  handleOperatorClick = (operator) => {
    const { display, currentInput, previousInput } = this.state;
    if (previousInput) {
      this.calculateResult();
    }
    this.setState({
      operator,
      previousInput: currentInput,
      currentInput: "",
    });
  };

  calculateResult = () => {
    const { operator, previousInput, currentInput } = this.state;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    }

    this.setState({
      display: result,
      currentInput: result,
      operator: null,
      previousInput: "",
    });
  };

  handleClear = () => {
    this.setState({
      display: "0",
      currentInput: "",
      operator: null,
      previousInput: "",
    });
  };

  handleEquals = () => {
    this.calculateResult();
  };

  render() {
    const { display } = this.state;

    return (
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-buttons">
          <button onClick={() => this.handleDigitClick("7")}>7</button>
          <button onClick={() => this.handleDigitClick("8")}>8</button>
          <button onClick={() => this.handleDigitClick("9")}>9</button>
          <button onClick={() => this.handleOperatorClick("+")}>+</button>
          <button onClick={() => this.handleDigitClick("4")}>4</button>
          <button onClick={() => this.handleDigitClick("5")}>5</button>
          <button onClick={() => this.handleDigitClick("6")}>6</button>
          <button onClick={() => this.handleOperatorClick("-")}>-</button>
          <button onClick={() => this.handleDigitClick("1")}>1</button>
          <button onClick={() => this.handleDigitClick("2")}>2</button>
          <button onClick={() => this.handleDigitClick("3")}>3</button>
          <button onClick={() => this.handleOperatorClick("*")}>*</button>
          <button onClick={() => this.handleDigitClick("0")}>0</button>
          <button onClick={this.handleClear}>C</button>
          <button onClick={this.handleEquals}>=</button>
          <button onClick={() => this.handleOperatorClick("/")}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
