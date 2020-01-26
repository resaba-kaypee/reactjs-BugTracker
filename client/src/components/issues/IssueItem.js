/* @todos
 *add a handler if the status is close remove buttons
 *only the user who created the issue will be allowed to edit
 *only admins can closed the issue
 */

import React, { useContext } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import IssueContext from "../../context/issue/issueContext";

const IssueItem = ({ issue }) => {
  const issueContext = useContext(IssueContext);
  const { deleteIssue, setCurrent, clearCurrent } = issueContext;
  const { _id, description, status, severity, assignedTo, date } = issue;

  const onDelete = () => {
    deleteIssue(_id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(issue);
  };

  const capitalize = val => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  return (
    <div>
      <h5 className="text-info">{description}</h5>
      <div>
        <span className="text-secondary">
          <span
            className={
              "badge " + (status === "open" ? "badge-light" : "badge-dark")
            }
          >
            Status: {capitalize(status)}
          </span>
          {" | "}
          <span>
            Severity: <span className="text-dark">{capitalize(severity)}</span>
          </span>
          <p>
            <span className="text-dark">ID#: {_id}</span> last updated by{" "}
            <span className="text-dark">{assignedTo}</span> on{" "}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
            <button
              className="btn btn-light float-right"
              type="button"
              onClick={onDelete}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <button
              className="btn btn-light float-right"
              type="button"
              data-toggle="modal"
              data-target="#editIssue"
              onClick={onEdit}
              disabled={status === "closed" ? "disabled" : null}
            >
              <i className="fas fa-edit"></i>
            </button>
            {/* <button className="btn btn-light float-right" onClick={onClose}>
          <i class="fas fa-window-close"></i>
        </button> */}
          </p>
        </span>
      </div>
    </div>
  );
};

// <Fragment>
//     <th scope="row">{_id}</th>
//     <td>{assignedTo}</td>
//     <td>{status}</td>
//     <td>{severity}</td>
//     <td>{date}</td>
//     <td>{description}</td>
//     <td>
//       <button className="btn btn-light float-right" type="button">
//         <i className="fas fa-trash-alt"></i>
//       </button>
//       <button
//         className="btn btn-light float-right"
//         type="button"
//         data-toggle="modal"
//         data-target="#editIssue"
//         disabled={status === "closed" ? "disabled" : null}
//       >
//         <i className="fas fa-edit"></i>
//       </button>
//     </td>
// </Fragment>

IssueItem.propTypes = {
  issue: PropTypes.object.isRequired
};

export default IssueItem;
