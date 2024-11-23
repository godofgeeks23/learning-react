import React from "react";

function InputBox({
  label,
  options,
  enabled,
  onCurrencyChange,
  selectedCurrency,
  amount=0,
  onAmountChange
}) {
  return (
    <div>
      {label}
      <select
        onChange={(e) => onCurrencyChange(e.target.value)}
        value={selectedCurrency}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <input disabled={!enabled} value={Number(amount)} onChange={(e)=> onAmountChange(e.target.value)}/>
    </div>
  );
}

export default InputBox;
