import React from "react";
import "./index.css";
import LecturesPage from "./pages/LecturesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LecturesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
