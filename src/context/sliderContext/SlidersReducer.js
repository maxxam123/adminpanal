const SlidersReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SLIDERS_START':
      return {
        sliders: [],
        isFetching: true,
        error: false,
      };
    case 'GET_SLIDERS_SUCCESS':
      return {
        sliders: action.payload,
        isFetching: false,
        error: false,
      };
    case 'GET_SLIDERS_FAILURE':
      return {
        sliders: [],
        isFetching: false,
        error: true,
      };

    // // DELETE
    // case 'DELETE_MOVIES_START':
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case 'DELETE_MOVIES_SUCCESS':
    //   return {
    //     movies: state.movies.filter((movie) => movie._id !== action.payload),
    //     isFetching: false,
    //     error: false,
    //   };
    // case 'DELETE_MOVIES_FAILURE':
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    // // CREATE
    // case 'CREATE_MOVIES_START':
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case 'CREATE_MOVIES_SUCCESS':
    //   return {
    //     movies: [...state.movies, action.payload],
    //     isFetching: false,
    //     error: false,
    //   };
    // case 'CREATE_MOVIES_FAILURE':
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };
    default:
      return { ...state };
  }
};

export default SlidersReducer;
