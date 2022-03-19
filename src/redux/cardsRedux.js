import shortid from 'shortid';

//selectors
export const getAllCards = ({cards}) => cards;

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');

//creators
export const addCard = (payload) => ({type: ADD_CARD, payload});

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
};

export default cardsReducer;
