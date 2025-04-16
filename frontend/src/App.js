import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import View from "./Pages/Items/view";
import Create from "./Pages/Items/create";
import Edit from "./Pages/Items/edit";
import HomePage from "./Pages/Home";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StudentDashboard from "./Pages/StudentDashboard";
import InstructorDashboard from "./Pages/InstructorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page: PostForm + PostList */}
        <Route path="/" element={
          <div className="App">
            <h1>🍽️ Cooking Skill Sharing</h1>
            <PostForm />
            <hr />
            <PostList />
          </div>
        } />

        {/* Other Pages */}
        <Route path="/view" element={<View />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
