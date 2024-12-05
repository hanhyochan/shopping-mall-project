
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProduct } from '../api/productApi';

// 비동기 작업 정의
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await getAllProduct();
  console.log(users)
  return users; // 액션 payload로 전달
});

// 초기 상태
const initialState = {
  users: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

// 슬라이스 정의
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload; // API 데이터 저장
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
