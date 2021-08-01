export const mutationReducer = (state, action) => {
  if (action.mutation) {
    return {
      ...state,
      [action.key]: action.state,
    };
  }

  return state;
};
