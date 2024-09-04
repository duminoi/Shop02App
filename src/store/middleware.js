export const middleware = (store) => {
  return (action) => {
    if (typeof action === "function") {
      return action(store.dispatch, store.getState);
    }
  };
};

//Bao gồm: state, dispatch, action
