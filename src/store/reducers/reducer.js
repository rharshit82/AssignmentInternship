export const initialState = {
    searchFilter: {}
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      
      case "SEARCH":
        console.log(action.data.item)
        return { ...state, searchFilter: action.data.item };
      default:
        return state;
    }
  }
  export default reducer;
  