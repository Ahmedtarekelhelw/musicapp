export const reducer = (state, action) => {
  switch (action.type) {
    case "fetchtracks":
      return { ...state, tracks: action.payload, loading: false };
    case "search":
      return {
        ...state,
        trackname: action.payload,
        heading: "Search Result",
      };
    default:
      return state;
  }
};
