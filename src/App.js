import "./index.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Calculadora from "./components/Calculadora";

export const ThemeContext = createContext(null);
/* import ModeDark from "./components/ModeDark"; */

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App flex-col " id={theme}>
        <div className="w-full h-12 flex justify-center aling-center">
          <h1 className="text-5xl text-slate-800"> Calculadora React</h1>
        </div>
        <Calculadora />
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
