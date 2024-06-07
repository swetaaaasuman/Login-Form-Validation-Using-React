import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Details from "./components/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
