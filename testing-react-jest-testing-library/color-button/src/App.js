import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1"); //This regular expression: if find a capital letter in the middle of a word and even if you find it multiple times, do this for every time you find it
  //replace it whatever letter you found preceded by a space
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed"); //buttonColor is used to set the color of the button
  const [disabled, setDisabled] = useState(false); //set the disabled value of the button

  const newButtonColor = // Alternate the color button
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        defaultChecked={disabled}
        type="checkbox"
        id="disable-button-checkbox"
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
