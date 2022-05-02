import axios from 'axios';
import {
  getSlidersFailure,
  getSlidersStart,
  getSlidersSuccess,
} from './SlidersActions';

// GET
export const getSliders = async (dispatch) => {
  dispatch(getSlidersStart());
  try {
    const res = await axios.get('http://localhost:5000/api/product1/');
    console.log('apicalls');
    console.log(res.data);
    dispatch(getSlidersSuccess(res.data));
  } catch (err) {
    dispatch(getSlidersFailure());
  }
};

// // DELETE
// export const deleteMovies = async (id, dispatch) => {
//   dispatch(deleteMoviesStart());
//   try {
//     await axios.delete('http://localhost:5000/api/product/' + id);
//     console.log('apicalls');
//     console.log(id);
//     dispatch(deleteMoviesSuccess(id));
//   } catch (err) {
//     dispatch(deleteMoviesFailure());
//   }
// };

// // CREATE
// export const createMovies = async (inputs, dispatch) => {
//   dispatch(createMoviesStart());
//   try {
//     const res = await axios.post('http://localhost:5000/api/product/', inputs);
//     console.log('apicalls');
//     console.log(res.data);
//     dispatch(createMoviesSuccess(res.data));
//   } catch (err) {
//     dispatch(createMoviesFailure());
//   }
// };
