import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProduct, getSelectedProduct } from '../api/productApi';

export const fetchAllProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await getAllProduct();
  return response;
});

export const fetchSelectedProduct = createAsyncThunk('products/fetchSelected', async (productId) => {
  const response = await getSelectedProduct(productId);
  return response;
});

// 초기 상태
const initialState = {
  products: [],
  selectedProduct: { images: [] },
  status: 'idle',
  error: null,
};

// 슬라이스 정의
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      //여기
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        console.log(action.payload)
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSelectedProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectedProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchSelectedProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
