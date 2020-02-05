import {
  ADD_PROJECT,
  GET_PROJECTS,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  PROJECT_ERROR,
  FILTER_PROJECTS,
  CLEAR_FILTERED_PROJECTS,
  CLEAR_PROJECTS,
  SET_CURRENT_PROJECT,
  CLEAR_CURRENT_PROJECT,
  GET_USERS,
  USERS_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        loading: false
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project =>
          project._id === action.payload._id ? action.payload : project
        ),
        loading: false
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.payload
        ),
        loading: false
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case FILTER_PROJECTS:
      return {
        ...state,
        filtered: state.projects.filter(project => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            project.description.match(regex) || project.projectName.match(regex)
          );
        })
      };
    case CLEAR_PROJECTS:
      return {
        ...state,
        projects: null
      };
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_PROJECT:
      return {
        ...state,
        current: null
      };
    case CLEAR_FILTERED_PROJECTS:
      return {
        ...state,
        filtered: null
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
