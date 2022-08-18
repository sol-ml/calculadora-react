import Button from "../components/common/Button";
import ButtonClear from "../components/common/ButtonClear";
import Input from "../components/common/Input";
import { useState } from "react";
import { evaluate } from "mathjs";

export const Calculadora = () => {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar el calculo");
    }
  };

  return (
    <div className="w-[340px] h-[480px] m-5 p-3.5 rounded-[24px] border-4 border-inherit drop-shadow-xl .bg">
      <Input input={input} />
      <div className="row">
        <Button click={addInput}>1</Button>
        <Button click={addInput}>2</Button>
        <Button click={addInput}>3</Button>
        <Button click={addInput}>+</Button>
      </div>
      <div className="row">
        <Button click={addInput}>4</Button>
        <Button click={addInput}>5</Button>
        <Button click={addInput}>6</Button>
        <Button click={addInput}>-</Button>
      </div>
      <div className="row">
        <Button click={addInput}>7</Button>
        <Button click={addInput}>8</Button>
        <Button click={addInput}>9</Button>
        <Button click={addInput}>*</Button>
      </div>
      <div className="row">
        <Button click={calculateResult}>=</Button>
        <Button click={addInput}>0</Button>
        <Button click={addInput}>.</Button>
        <Button click={addInput}>/</Button>
      </div>
      <div className="row">
        <ButtonClear click={() => setInput("")}>Clear</ButtonClear>
      </div>
    </div>
  );
};

export default Calculadora;
