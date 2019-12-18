import React, { useReducer } from "react";
import uuid from "uuid";
import IssueContext from "./issueContext";
import issueReducer from "./issueReducer";
import {
  ADD_ISSUE,
  DELETE_ISSUE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ISSUES,
  FILTER_ISSUES,
  CLEAR_FILTER
} from "../types";
import issueContext from "./issueContext";

const IssueState = props => {
  const initialState = {
    issues: [
      // hard coded sample issues
      {
        id: 1,
        description: "Failed to save",
        severity: "medium",
        status: "open",
        assignedTo: "Jack",
        date: "12-12-12"
      },
      {
        id: 2,
        description: "Failed to load",
        severity: "low",
        status: "close",
        assignedTo: "Jill",
        date: "12-12-12"
      },
      {
        id: 3,
        description: "Failed to initiate",
        severity: "high",
        status: "open",
        assignedTo: "Jake",
        date: "12-12-12"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(issueReducer, initialState);

  // Add issue
  const addIssue = issue => {
    issue.id = uuid.v4();
    dispatch({ type: ADD_ISSUE, payload: issue });
  };

  // Delete issue
  const deleteIssue = id => {
    dispatch({ type: DELETE_ISSUE, payload: id });
  };

  // Set current issue
  const setCurrent = issue => {
    dispatch({ type: SET_CURRENT, payload: issue });
  };

  // Clear current issue
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update issue

  // Filter issues

  // Clear filter

  return (
    <IssueContext.Provider
      value={{
        issues: state.issues,
        current: state.current,
        addIssue,
        deleteIssue,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </IssueContext.Provider>
  );
};

export default IssueState;
