import { useState, useEffect, useRef } from "react";
import "./App.css";
import { useCallback } from "react";

function App() {
  const minPaswdLength = 4;

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(minPaswdLength);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const passwordRef = useRef(null);

  // use useCallback to memoize the function
  const generatePassword = useCallback(() => {
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;
    // create a random string of length characters
    const password = Array.from(
      { length: length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");

    setPassword(password);
  });

  function copyPassword() {
    passwordRef.current.select();
    document.execCommand("copy");
  }

  useEffect(() => {
    generatePassword();
  }, [length, includeSymbols, includeNumbers]);

  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" value={password} ref={passwordRef} readOnly />
      <button onClick={() => copyPassword}>Copy Password</button>
      <br />
      <input
        type="range"
        min={minPaswdLength}
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <label>Password Length: {length}</label>
      <br />
      <input
        type="checkbox"
        checked={includeSymbols}
        onChange={(e) => setIncludeSymbols(e.target.checked)}
      />{" "}
      <label>Include Symbols</label>
      <br />
      <input
        type="checkbox"
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      />
      <label>Include Numbers</label>
    </>
  );
}

export default App;
