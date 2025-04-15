import React, { useEffect, useState } from "react";
import axios from "axios";

function InstructorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", description: "" });

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
      <h1>Welcome {user.username} (Instructor)</h1>

      <h2>Create Course</h2>
      <input
        type="text"
        placeholder="Title"
        value={newCourse.title}
        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
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
  );
}

export default InstructorDashboard;
