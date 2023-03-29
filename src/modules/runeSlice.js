import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const loadRune = createAsyncThunk(
  "buildData/runeRune",
  async () => {
    const res = await axios.get("https://port-0-yorick-backend-3kzv72nlemj02qx.sel3.cloudtype.app/rune/all");
    return res.data;
  }
);

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const runeData = createSlice({
  name: "runeData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadRune.pending, (state, action) => {
        state.loading = true;
      })
      builder.addCase(loadRune.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      builder.addCase(loadRune.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
  
});

export default runeData;