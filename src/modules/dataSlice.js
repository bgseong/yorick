import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const loadData = createAsyncThunk(
  "load/data",
  async () => {
    const res = await axios.get("http://localhost:8000/Builds");
    return res.data;
    }
);

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const buildData = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default buildData;