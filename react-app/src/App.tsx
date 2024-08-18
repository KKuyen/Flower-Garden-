import React, { useState } from "react"; // Import the useState function
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Cuahang from "./cuahang.css"; // Import the Cuahang component
import Menu from "./menu";

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addUniqueRandomNumber = () => {
    if (numbers.length >= 30) {
      console.log("All numbers from 1 to 30 are already in the array.");
      return;
    }
    const evenNumbersCount = numbers.filter(
      (number) => number % 2 === 0
    ).length;
    if (evenNumbersCount >= 15) {
      console.log("All even numbers from 1 to 30 are already in the array.");
      return;
    }

    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * 15) * 2 + 2; // Generate even number between 2 and 30
    } while (numbers.includes(newNumber));

    setNumbers([...numbers, newNumber]);
  };

  const addUniqueOddRandomNumber = () => {
    if (numbers.length >= 30) {
      console.log("All numbers from 1 to 30 are already in the array.");
      return;
    }
    const oddNumbersCount = numbers.filter((number) => number % 2 !== 0).length;

    if (oddNumbersCount >= 15) {
      console.log("All odd numbers from 1 to 30 are already in the array.");
      return;
    }

    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * 15) * 2 + 1;
    } while (numbers.includes(newNumber));

    setNumbers([...numbers, newNumber]);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Menu
              numbers={numbers}
              addUniqueRandomNumber={addUniqueRandomNumber}
              addUniqueOddRandomNumber={addUniqueOddRandomNumber}
            />
          }
        />
        <Route path="/cuahang" element={<Cuahang />} />
      </Routes>
    </Router>
  );
};

export default App;
