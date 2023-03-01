import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [countries, setCountries] = useState([]);

  let [students, setStudents] = useState([]);

  let getAsianCountries = async () => {
    let response = await axios.get("/asianCountries");
    console.log(response.data);
    setCountries(response.data);
  };

  let getStudents = async () => {
    let response = await axios.get("/getStudents");

    console.log(response.data);
    setStudents(response.data);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          getAsianCountries();
        }}
      >
        Get Asian Countries
      </button>
      <button
        onClick={() => {
          getStudents();
        }}
      >
        Get Students
      </button>
      {countries.map((country) => {
        return <h1>{country}</h1>;
      })}
      {students.map((student) => {
        return <h1>{student.name}</h1>;
      })}
    </div>
  );
}

export default App;
