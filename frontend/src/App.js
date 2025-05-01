import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./Pages/Items/view";
import Create from "./Pages/Items/create";
import Edit from "./Pages/Items/edit";
import HomePage from "./Pages/Home";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StudentDashboard from "./Pages/StudentDashboard";
import ListPost from "./Pages/Posts/ListPost";
import Dashboard from "./Pages/Dashboard";
import CreatePost from "./Pages/Posts/CreatePost";
import UpdatePost from "./Pages/Posts/UpdatePost";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view" element={<View />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentDashboard />} />

          <Route path="/instructor" element={<Dashboard />} />

          <Route path="/post/list" element={<ListPost />} />
          <Route path="/post/create" element={<CreatePost />} />
          <Route path="/post/update/:id" element={<UpdatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
