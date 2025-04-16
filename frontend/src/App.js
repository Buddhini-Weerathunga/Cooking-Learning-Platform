import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./Pages/Items/view";
import Create from "./Pages/Items/create";
import Edit from "./Pages/Items/edit";
import HomePage from "./Pages/Home";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StudentDashboard from "./Pages/StudentDashboard";
import InstructorDashboard from "./Pages/InstructorDashboard";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

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
          <Route path="/instructor" element={<InstructorDashboard />} />
                 <Route path="/post/list" element={<PostList />} />
                          <Route path="/post/create" element={<PostForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;