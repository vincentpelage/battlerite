/*
 * Types
 */


/*
 * Initial state
 */
const initialState = {

};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case action.type:
      console.log(action.type);

    default:
      return state;
  }
};


/*
 * Action creators
 */
