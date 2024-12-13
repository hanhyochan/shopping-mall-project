// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { getAllProduct, getSelectedProduct } from '../api/productApi';

// const favoriteSlice = createSlice({
//   name: 'favorites',
//   initialState: {
//     favorites: []
//   },
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const productId = action.payload;
//       if (state.favorites.includes(productId)) {
//         state.favorites = state.favorites.filter(id => id !== productId)
//       } else {
//         state.favorites = [...state.favorites, productId]
//       }
//     }
//   },
// });

// export const { toggleFavorite } = favoriteSlice.action

// export default favoriteSlice.reducer;
