import uniqid from 'uniqid';

//selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, postId) => posts.filter((post) => post.id === postId)[0];

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');

// action creators
export const deletePost = (payload) => ({type: REMOVE_POST, payload});
export const addPost = (payload) => ({type: ADD_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, {...action.payload, id: uniqid()}];
    default:
      return statePart;
  }
};

export default postsReducer;
