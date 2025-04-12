import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./Pages/Items/view";
import Create from "./Pages/Items/create";
import Edit from "./Pages/Items/edit";
import HomePage from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view" element={<View />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
