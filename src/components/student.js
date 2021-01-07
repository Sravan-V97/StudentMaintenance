import "./student.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

function Students() {
  const [courses, setCourses] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [inputShow, setInputShow] = useState(false);
  const [studentInputShow, setStudentInputShow] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputTextStudent, setInputTextStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  //load course and student details from cache storage
  useEffect(() => {
    let presavedCourses = localStorage.getItem("courses");
    let presavedStudents = localStorage.getItem("students");
    if (presavedCourses) {
      //handle invalid json parsing error
      try {
        setCourses(JSON.parse(presavedCourses));
      } catch (error) {
        console.log(error);
      }
    }
    if (presavedStudents) {
      //handle invalid json parsing error
      try {
        setAllStudents(JSON.parse(presavedStudents));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  // create new course

  // map students dropdown values with course details

  useEffect(() => {
    if (selectedCourse) {
      console.log(selectedCourse);
      let _tempStudents = [...allStudents];
      console.log(_tempStudents);
      let _holdStudents = [];
      for (const student of _tempStudents) {
        if (selectedCourse.id === student.course) {
          _holdStudents.push(student);
        }
      }
      setStudents(_holdStudents);
    }
  }, [selectedCourse]);

  const addCourse = () => {
    if (inputText) {
      let _tempCourses = [...courses];
      _tempCourses.push({ name: inputText, id: Date.now() });
      localStorage.setItem("courses", JSON.stringify(_tempCourses));
      setCourses(_tempCourses);
      setInputShow(false);
      setInputText("");
    } else {
      alert("Course name cannot be empty");
    }
  };
  const addStudent = () => {
    if (inputTextStudent) {
      let _tempStudents = [...students];
      let newStudent = {
        name: inputTextStudent,
        id: Date.now(),
        course: selectedCourse.id,
      };
      _tempStudents.push(newStudent);
      localStorage.setItem("students", JSON.stringify(_tempStudents));
      let _tempAllStudents = [...allStudents];
      _tempAllStudents.push(newStudent);
      setAllStudents(_tempAllStudents);
      setStudents(_tempStudents);
      setInputTextStudent("");
      setStudentInputShow(false);
    } else {
      alert("Student name cannot be empty");
    }
  };
  const cancel = () => {
    setInputShow(false);
    setInputText("");
    setInputTextStudent("");
    setStudentInputShow(false);
  };
  return (
    <section className="StudentCourses">
      <div className="row title">
        <h1>Course and Students Maintenance</h1>
      </div>
      <div className="row content">
        <div className="col-lg-6 label">
          <h3>Courses</h3>
        </div>
        <div className="col-lg-6">
          <DropdownButton
            id="dropdown-basic-button"
            title={`${selectedCourse ? selectedCourse.name : "Courses"}`}
          >
            {courses.length ? (
              courses.map((course) => (
                <Dropdown.Item
                  key={course.id}
                  id={course.id}
                  onClick={(e) => {
                    setSelectedCourse(course);
                    e.preventDefault();
                  }}
                >
                  {course.name}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item id="disabled" disabled>
                No Courses were added
              </Dropdown.Item>
            )}
          </DropdownButton>

          <Button
            id="add-button"
            as="input"
            type="button"
            value="Add New Course"
            onClick={() => {
              setInputShow(true);
            }}
          />
          {inputShow && (
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <Form.Control
                  id="datainput"
                  type="input"
                  placeholder="Course Name"
                  onInput={(e) => {
                    setInputText(e.target.value);
                  }}
                />
              </div>
              {inputText && (
                <div className="col-lg-4 icons">
                  <button className="tick-btn" onClick={() => addCourse()}>
                    <i className="fa fa-check fa-2x" aria-hidden="true"></i>
                  </button>
                  <button className="cross-btn" onClick={() => cancel()}>
                    <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="row content">
        <div className="col-lg-6 label">
          <h3>Students</h3>
        </div>
        {selectedCourse && (
          <div className="col-lg-6">
            <DropdownButton
              id="dropdown-basic-button"
              title={selectedStudent ?? "Students"}
            >
              {students.length ? (
                students.map((student) => (
                  <Dropdown.Item
                    key={student.id}
                    id={student.id}
                    onClick={(e) => {
                      setSelectedStudent(student.name);

                      e.preventDefault();
                    }}
                  >
                    {student.name}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item id="disabled" disabled>
                  No Students were added
                </Dropdown.Item>
              )}
            </DropdownButton>

            <Button
              id="add-button"
              as="input"
              type="button"
              value="Add Student"
              onClick={() => {
                setStudentInputShow(true);
              }}
            />

            {studentInputShow && (
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <Form.Control
                    id="datainput"
                    type="input"
                    placeholder="Student Name"
                    onInput={(e) => {
                      setInputTextStudent(e.target.value);
                    }}
                  />
                </div>
                {inputTextStudent && (
                  <div className="col-lg-4 icons">
                    <button className="tick-btn" onClick={() => addStudent()}>
                      <i className="fa fa-check fa-2x" aria-hidden="true"></i>
                    </button>
                    <button className="cross-btn" onClick={() => cancel()}>
                      <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Students;
