/*
 *add a handler if the status is close remove buttons
 *only the user who created the issue will be allowed to edit
 *only admins can closed the issue
 */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import IssueContext from "../../context/issue/issueContext";

const IssueItem = ({ issue }) => {
  const issueContext = useContext(IssueContext);
  const { deleteIssue, setCurrent, clearCurrent } = issueContext;

  const { _id, description, status, severity, assignedTo, date, user } = issue;

  const onDelete = e => {
    deleteIssue(_id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(issue);
  };

  return (
    <div className="card bg-light grid-2">
      <p style={{ fontSize: 12 }}>
        {" "}
        <strong>Issue Id:</strong> {_id}
      </p>
      <p>
        <span
          className={
            "badge " + (status === "close" ? "badge-primary" : "badge-danger")
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </p>
      <h4>{description}</h4>
      <p>
        <span className="badge badge-white">
          <i className="fas fa-clock"></i> {severity}
        </span>{" "}
        <span>
          <i className="fas fa-user"></i> {assignedTo}
        </span>
      </p>
      <div>
        {status === "close" ? (
          <span>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Delete
            </button>
          </span>
        ) : (
          <span>
            <button className="btn btn-primary btn-sm">Close</button>
            <button className="btn btn-success btn-sm" onClick={onEdit}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Delete
            </button>
          </span>
        )}
      </div>
      <span style={{ float: "right", fontSize: 12 }}>
        <p>Date issue: {date}</p>
        {status === "close" ? <p>Date closed: {date}</p> : ""}
      </span>
    </div>
  );
};

IssueItem.propTypes = {
  issue: PropTypes.object.isRequired
};

export default IssueItem;
