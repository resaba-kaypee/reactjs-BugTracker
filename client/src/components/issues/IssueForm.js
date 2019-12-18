/*
get the assigned to: from the user that is log in
*/

import React, { useState, useContext } from "react";
import IssueContext from "../../context/issue/issueContext";

const IssueForm = () => {

  const issueContext = useContext(IssueContext);

  const [issue, setIssue] = useState({
    description: "",
    severity: "low",
    status: "open",
    assignedTo: "Jhon",
    date: addDate()
  });

  const { description, severity, assignedTo, date } = issue;

  const onChange = e => setIssue({ ...issue, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    issueContext.addIssue(issue);
    setIssue({
      description: "",
      severity: "low",
      status: "open",
      assignedTo: "Jhon",
      date: addDate()
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Issue</h2>
      <input
        type="text"
        placeholder="Issue"
        name="description"
        value={description}
        onChange={onChange}
      />
      <h4>Severity</h4>
      <input
        type="radio"
        name="severity"
        value="low"
        checked={severity === "low"}
        onChange={onChange}
      />
      Low{" "}
      <input
        type="radio"
        name="severity"
        value="medium"
        checked={severity === "medium"}
        onChange={onChange}
      />
      Medium{" "}
      <input
        type="radio"
        name="severity"
        value="high"
        checked={severity === "high"}
        onChange={onChange}
      />
      High <br />
      <span>
        <strong>Assigned to:</strong> <i className="fas fa-user"></i>
        {assignedTo}
      </span>
      <p>Date Issue: {date}</p>
      <div>
        <input
          type="submit"
          value="Add Issue"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

const addDate = () => {
  let date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dd = date.getDate();
  let mm = date.getMonth();
  let yy = date.getFullYear();
  let d = days[date.getDay()];
  let h = date.getHours();
  let m = date.getMinutes();
  let am_pm = "AM";

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h -= 12;
    am_pm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  return `${d}-${h}:${m}${am_pm} : ${dd}/${mm}/${yy}`;
};

export default IssueForm;