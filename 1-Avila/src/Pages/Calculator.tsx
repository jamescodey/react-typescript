//import React from 'react'
import { ButtonSet } from "../Components/ButtonSet";
import { CalcText } from "../Components/CalcText";
import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import NavBar from "../Components/NavBar";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [previousDisplayValue, setPreviousDisplayValue] = useState<string>("");

  const handleData = (data: string): void => {
    switch (data) {
      case "C":
        setDisplayValue("");
        setPreviousDisplayValue("");
        break;
      case "<":
        displayValue === ""
          ? setDisplayValue("")
          : setDisplayValue(displayValue.slice(0, -1))
        break;
      case "=":
        try {
          setDisplayValue(eval(displayValue));
          setPreviousDisplayValue(displayValue);
          setAnswer(eval(displayValue));
        } catch (error) {
          setDisplayValue("Error");
        }
        break;

      case "%":
        try {
          setDisplayValue(eval(displayValue + "*100"));
        } catch (error) {
          setDisplayValue("Error");
        }
        break;
      default:
        displayValue === "Error"
          ? setDisplayValue("" + data)
          : displayValue === answer
          ? setDisplayValue("" + data)
          : setDisplayValue(displayValue + data);
        break;
    }
  };

  return (
    <div>
      <NavBar />
      <Container className="calculator-body">
        <Stack gap={3} className="calculator-main-stack">
          <Stack gap={2} className="calculator-text-stack">
            <div className="cashew">
              <text>Cashew 69695EX-PLUS</text>
            </div>
            <CalcText type="history" content={previousDisplayValue} />
            <CalcText type="result" content={displayValue} />
          </Stack>
          <Stack gap={2} className="calculator-button-stack">
            <ButtonSet
              id="calc-button-first-row"
              value1="C"
              value2="<"
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
