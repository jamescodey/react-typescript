import { ButtonSet } from "../Components/ButtonSet";
import { CalcText } from "../Components/CalcText"; 
import { useState } from "react";
import { Container, Stack } from "react-bootstrap"; 
import NavBar from "../Components/NavBar"; 

export default function Calculator() {
  // State variables for managing display and operations
  const [displayValue, setDisplayValue] = useState<string>(""); 
  const [answer, setAnswer] = useState<string>(""); 
  const [previousDisplayValue, setPreviousDisplayValue] = useState<string>("");
  const [operationClicked, setOperationClicked] = useState(false); 
  const operations = ["**", "/", "+", "-", ".", "%"]; 

  // Function to handle data input
  const handleData = (data: string): void => {
    switch (data) {
      case "C":
        // Clearing display and resetting state
        setDisplayValue("");
        setPreviousDisplayValue("");
        setOperationClicked(false);
        break;
      case "Del":
        // Deleting last character from display
        displayValue === ""
          ? setDisplayValue("")
          : setDisplayValue(displayValue.slice(0, -1));
        displayValue === "";
        break;
      case "=":
        // Evaluating expression and updating display
        try {
          setDisplayValue(eval(displayValue));
          setPreviousDisplayValue(displayValue);
          setAnswer(eval(displayValue));
          setOperationClicked(true);
        } catch (error) {
          setDisplayValue(eval(displayValue.slice(0, -1)));
          setOperationClicked(true);
        }
        break;
      default:
        // Handling numeric and operation inputs
        if (displayValue === "Error") {
          setDisplayValue("" + data);
        } else if (displayValue === "") {
          if (operations.includes(data)) {
            setDisplayValue("");
          } else {
            setDisplayValue(displayValue + data);
          }
        } else if (displayValue === answer) {
          setDisplayValue("" + data);
        } else if (operations.includes(data)) {
          if (operationClicked) {
            setDisplayValue(displayValue.slice(0, -1) + data);
            setOperationClicked(true);
          } else {
            setDisplayValue(displayValue + data);
            setOperationClicked(true);
          }
        } else if (displayValue.slice(-2) === "00" && data === ".") {
          setDisplayValue(displayValue.slice(0, -1) + data);
        } else if (displayValue == "0" || displayValue == "00") {
          setDisplayValue("" + data);
          setOperationClicked(false);
        } else if (
          displayValue.slice(-2) === "00" &&
          operations.includes(displayValue.charAt(displayValue.length - 3))
        ) {
          setDisplayValue(displayValue.slice(0, -2) + data);
        } else if (
          displayValue.slice(-1) === "0" &&
          operations.includes(displayValue.charAt(displayValue.length - 2))
        ) {
          setDisplayValue(displayValue.slice(0, -1) + data);
        } else {
          setDisplayValue(displayValue + data);
          setOperationClicked(false);
        }
        break;
    }
  };

  // JSX returned by the component
  return (
    <div className="fade-in">
      <NavBar /> 
      <Container className="calculator-body"> 
        <Stack gap={3} className="calculator-main-stack"> 
          <Stack gap={0} className="calculator-text-stack"> 
            <div className="cashew"> 
              <text>Cashew 69695EX-PLUS</text> 
            </div>
            <CalcText type="history" content={previousDisplayValue} /> {/* Rendering component for display of previous value */}
            <CalcText type="result" content={displayValue} /> {/* Rendering component for display of current value */}
          </Stack>
          <Stack gap={2} className="calculator-button-stack"> 
            {/* Rendering ButtonSets for calculator buttons */}
            <ButtonSet
              id="calc-button-first-row"
              value1="C"
              value2="Del"
              value3="%"
              value4="/"
              dataFromButton={handleData}
            />
            <ButtonSet
              id="calc-button-row"
              value1="7"
              value2="8"
              value3="9"
              value4="x"
              dataFromButton={handleData}
            />
            <ButtonSet
              id="calc-button-row"
              value1="4"
              value2="5"
              value3="6"
              value4="-"
              dataFromButton={handleData}
            />
            <ButtonSet
              id="calc-button-row"
              value1="1"
              value2="2"
              value3="3"
              value4="+"
              dataFromButton={handleData}
            />
            <ButtonSet
              id="calc-button-last-row"
              value1="00"
              value2="0"
              value3="."
              value4="="
              dataFromButton={handleData}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
