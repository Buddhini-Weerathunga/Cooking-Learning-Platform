import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/InstructorNav";

function Dashboard() {
  const [activeSection, setActiveSection] = useState(1);
  const user = JSON.parse(localStorage.getItem("user"));
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    content: "",
    price: "",
    startDate: "",
    closingDate: "",
  });

  const handleClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  // Fetch courses when the component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/courses/instructor?username=${user.username}`,
        axiosConfig
      );
      console.log("Courses data:", res.data); // Log response for debugging
      if (Array.isArray(res.data)) {
        setCourses(res.data); // Update courses state with fetched data
      } else {
        console.warn("Expected array, got:", res.data);
        setCourses([]); // If not an array, set courses to an empty array
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
      setCourses([]); // Set to empty array if error occurs
    }
  };

  const handleCreateCourse = async () => {
    try {
      const courseData = {
        ...newCourse,
        price: parseFloat(newCourse.price), // Ensure price is a number
      };
      await axios.post(
        `http://localhost:8080/api/courses/create?username=${user.username}`,
        courseData,
        axiosConfig
      );
      // Reset the form after successful creation
      setNewCourse({
        title: "",
        description: "",
        content: "",
        price: "",
        startDate: "",
        closingDate: "",
      });
      fetchCourses(); // Refresh the list of courses after adding a new one
    } catch (err) {
      console.error("Error creating course:", err);
    }
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
            Courses
          </button>
          <button style={getButtonStyle(2)} onClick={() => handleClick(2)}>
            Students
          </button>
          <button style={getButtonStyle(3)} onClick={() => handleClick(3)}>
            Profile
          </button>
          <button style={getButtonStyle(4)} onClick={() => handleClick(4)}>
            Feedbacks
          </button>
        </div>

        {/* Section Content */}
        <div className="border p-4 rounded" style={{ minHeight: "200px" }}>
          {activeSection === 1 && (
            <div style={{ padding: "20px" }}>
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
              <br />
              <input
                type="text"
                placeholder="Description"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
                }
              />
              <br />
              <input
                type="text"
                placeholder="Content"
                value={newCourse.content}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, content: e.target.value })
                }
              />
              <br />
              <input
                type="number"
                placeholder="Price"
                value={newCourse.price}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, price: e.target.value })
                }
              />
              <br />
              <input
                type="date"
                placeholder="Start Date"
                value={newCourse.startDate}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, startDate: e.target.value })
                }
              />
              <br />
              <input
                type="date"
                placeholder="Closing Date"
                value={newCourse.closingDate}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, closingDate: e.target.value })
                }
              />
              <br />
              <button onClick={handleCreateCourse}>Create Course</button>

              <h2>Your Courses</h2>
              {courses.length > 0 ? (
                <ul>
                  {courses.map((course) => (
                    <li key={course.id} style={{ marginBottom: "15px" }}>
                      <strong>Title:</strong> {course.title}
                      <br />
                      <strong>Description:</strong> {course.description}
                      <br />
                      <strong>Content:</strong> {course.content}
                      <br />
                      <strong>Price:</strong> ${course.price}
                      <br />
                      <strong>Start Date:</strong> {course.startDate}
                      <br />
                      <strong>Closing Date:</strong> {course.closingDate}
                      <br />
                      <strong>Instructor:</strong>{" "}
                      {course.instructor?.username || "N/A"}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No courses found.</p>
              )}
            </div>
          )}
          {activeSection === 2 && (
            <div>
              <h4>Section 2 Content</h4>
              <p>This is the content of Section 3.</p>
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
