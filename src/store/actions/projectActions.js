export const createProject = project => {
  return (dispatch, getState) => {
    // we can make async call to database
    dispatch({ type: "CREATE_PROJECT", project /* project: project (es6)*/ });
  };
};
