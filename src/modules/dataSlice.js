import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const loadData = createAsyncThunk(
  "buildData/loadData",
  async () => {
    const res = await axios.get("http://127.0.0.1:8000/Builds");
    return res.data;
  }
);

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const buildData = createSlice({
  name: "buildData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadData.pending, (state, action) => {
        state.loading = true;
      })
      builder.addCase(loadData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      builder.addCase(loadData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
  
});

export default buildData;