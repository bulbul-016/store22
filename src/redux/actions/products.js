import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchProducts = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .get(
      `http://localhost:3001/products?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setProducts(data));
    });
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});



// import axios from 'axios';

// export const setLoaded = (payload) => ({
//   type: 'SET_LOADED',
//   payload,
// });

// export const fetchProducts = (sortBy, category) => (dispatch) => {
//   dispatch({
//     type: 'SET_LOADED',
//     payload: false,
//   });
//   axios.get(`http://localhost:3001/products?category=${category}`).then(({ data }) => {
//     dispatch(setProducts(data));
//     console.log(data);
//   });
// };

// export const setProducts = (items) => ({
//   type: 'SET_PRODUCTS',
//   payload: items,
// });
