export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // we can make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        //reference to projects collection
        ...project,
        authorFirstName: "Harry",
        authorLastName: "Potter",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project /* project: project (es6)*/
        });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
