import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/InstructorNav";

function FourSectionPage() {
  const [activeSection, setActiveSection] = useState(1);
  const user = JSON.parse(localStorage.getItem("user"));
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", description: "" });

  const handleClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  const getButtonStyle = (sectionNumber) => ({
    marginRight: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: activeSection === sectionNumber ? "#ff6804" : "#e0e0e0",
    color: activeSection === sectionNumber ? "white" : "black",
    cursor: "pointer",
    transition: "0.3s",
    fontFamily: "'Madimi One', sans-serif",
  });

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${user.token}`, // Assuming token is stored in user object
    },
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/courses/instructor?username=${user.username}`,
        axiosConfig
      )
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, [user.username]);

  const handleCreateCourse = async () => {
    try {
      await axios.post(
        `http://localhost:8080/api/courses/create?username=${user.username}`,
        newCourse,
        axiosConfig
      );
      const res = await axios.get(
        `http://localhost:8080/api/courses/instructor?username=${user.username}`,
        axiosConfig
      );
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        {/* Buttons Row */}
        <div
          className="d-flex justify-content-center mb-4 "
          style={{ marginTop: "-30px" }}
        >
          <button
            style={getButtonStyle(1)}
            onClick={() => handleClick(1)}
            onMouseEnter={() => {}}
          >
            Dashboard
          </button>
          <button style={getButtonStyle(2)} onClick={() => handleClick(2)}>
            Courses
          </button>
          <button style={getButtonStyle(3)} onClick={() => handleClick(3)}>
            Students
          </button>
          <button style={getButtonStyle(4)} onClick={() => handleClick(4)}>
            Profile
          </button>
          <button style={getButtonStyle(5)} onClick={() => handleClick(5)}>
            Feedbacks
          </button>
        </div>

        {/* Section Content */}
        <div className="border p-4 rounded" style={{ minHeight: "200px" }}>
          {activeSection === 1 && (
            <div>
              <h4>Section 1 Content</h4>
              <p>This is the content of Section 1.</p>
            </div>
          )}
          {activeSection === 2 && (
            <div>
              <h1>Welcome {user.username} (Instructor)</h1>

              <h2>Create Course</h2>
              <input
                type="text"
                placeholder="Title"
                value={newCourse.title}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Description"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
                }
              />
              <button onClick={handleCreateCourse}>Create</button>

              <h2>Your Courses</h2>
              <ul>
                {courses.map((course) => (
                  <li key={course.id}>
                    <strong>{course.title}</strong>: {course.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === 3 && (
            <div>
              <h4>Section 3 Content</h4>
              <p>This is the content of Section 3.</p>
            </div>
          )}
          {activeSection === 4 && (
            <div>
              <h4>Section 4 Content</h4>
              <p>This is the content of Section 4.</p>
            </div>
          )}
          {activeSection === 5 && (
            <div>
              <h4>Section 4 Content</h4>
              <p>This is the content of Section 4.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FourSectionPage;
