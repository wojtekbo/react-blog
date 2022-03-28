//selectors
export const getAllCategories = ({categories}) => categories;

// // actions
// const createActionName = (actionName) => `app/posts/${actionName}`;
// const REMOVE_POST = createActionName('REMOVE_POST');

// // action creators
// export const deletePost = (payload) => ({type: REMOVE_POST, payload});

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    // case REMOVE_POST:
    //   return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default categoriesReducer;
