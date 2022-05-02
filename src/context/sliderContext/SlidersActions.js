// GET
export const getSlidersStart = () => ({
  type: 'GET_SLIDERS_START',
});

export const getSlidersSuccess = (sliders) => ({
  type: 'GET_SLIDERS_SUCCESS',
  payload: sliders,
});

export const getSlidersFailure = () => ({
  type: 'GET_SLIDERS_FAILURE',
});

// // DELETE
// export const deleteMoviesStart = () => ({
//   type: 'DELETE_MOVIES_START',
// });

// export const deleteMoviesSuccess = (id) => ({
//   type: 'DELETE_MOVIES_SUCCESS',
//   payload: id,
// });

// export const deleteMoviesFailure = () => ({
//   type: 'DELETE_MOVIES_FAILURE',
// });

// // CREATE
// export const createMoviesStart = () => ({
//   type: 'CREATE_MOVIES_START',
// });

// export const createMoviesSuccess = (movie) => ({
//   type: 'CREATE_MOVIES_SUCCESS',
//   payload: movie,
// });

// export const createMoviesFailure = () => ({
//   type: 'CREATE_MOVIES_FAILURE',
// });
