import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [fromCurrency, setFromCurrency] = useState();
  const [fromAmount, setFromAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState();
  const [toAmount, setToAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState();
  const currencyInfo = useCurrencyInfo(fromCurrency);

  const handleFromCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value) => {
    setToCurrency(value);
  };

  const handleFromAmountChange = (value) => {
    setFromAmount(value);
    calculate();
  };
  const handleToAmountChange = (value) => {
    setToAmount(value);
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    )
      .then((res) => res.json())
      .then((res) => setCurrencyList(Object.keys(res)));
  }, []);

  const calculate = () => {
    setToAmount(fromAmount * Number(currencyInfo[fromCurrency][toCurrency]));
  };

  return (
    <>
      <h1>Currency Conversion</h1>
      {currencyList ? (
        <InputBox
          label="From"
          options={currencyList}
          enabled="true"
          onCurrencyChange={handleFromCurrencyChange}
          selectedCurrency={fromCurrency}
          amount={fromAmount}
          onAmountChange={handleFromAmountChange}
        />
      ) : (
        <InputBox label="From" options={["Loading"]} enabled="true" />
      )}
      <br />
      <button onClick={swap}>SWAP</button>
      <br />
      <br />
      {currencyList ? (
        <InputBox
          label="To"
          options={currencyList}
          enabled="false"
          onCurrencyChange={handleToCurrencyChange}
          selectedCurrency={toCurrency}
          amount={toAmount}
          onAmountChange={handleToAmountChange}
        />
      ) : (
        <InputBox label="To" options={["Loading"]} enabled="false" />
      )}
      <br />
      <br />
      <button onClick={calculate}>
        Convert {fromCurrency} to {toCurrency}
      </button>
    </>
  );
}

export default App;
