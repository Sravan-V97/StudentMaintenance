import "./student.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Students() {
  return (
    <section class="StudentCourses">
      <div class="row title">
        <h1>Course and Students Maintenance</h1>
      </div>
      <div class="row content">
        <div class="col-lg-6 label">
          <h3>Courses</h3>
        </div>
        <div class="col-lg-6">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item id="dropdown-basic-button" href="#/action-1">
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <Button
            id="add-button"
            as="input"
            type="button"
            value="Add New Course"
          />

          <div class="row">
          <div class="col-lg-4"></div>
            <div class="col-lg-4">
              <Form.Control id="datainput" type="input" placeholder="" />
            </div>
            <div class="col-lg-4 icons">
              <button class="tick-btn">
                <i class="fa fa-check fa-2x" aria-hidden="true"></i>
              </button>
              <button class="cross-btn">
                <i class="fa fa-times fa-2x" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row content">
        <div class="col-lg-6 label">
          <h3>Students</h3>
        </div>
        <div class="col-lg-6">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item id="dropdown-basic-button" href="#/action-1">
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <Button
            id="add-button"
            as="input"
            type="button"
            value="Add Student"
          />

          <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
              <Form.Control id="datainput" type="input" placeholder="" />
            </div>
            <div class="col-lg-4 icons">
              <button class="tick-btn">
                <i class="fa fa-check fa-2x" aria-hidden="true"></i>
              </button>
              <button class="cross-btn">
                <i class="fa fa-times fa-2x" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Students;
