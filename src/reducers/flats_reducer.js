const flatsReducer = (state, action) => { 
  // flatsReducer receives state and action. If action then it returns a new state, if not it just returns the previous state
  if (state === undefined) {
    // Reducer initialisation
    return []; 
  }
  // to do: handle some actions
  switch(action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state; 
  } 


};
export default flatsReducer;