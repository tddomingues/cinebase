import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../service/apiService";

const API_KEY = process.env.REACT_APP_API_KEY;
const url_base = "https://api.themoviedb.org/3";

const initialState = {
  loading: false,
  error: null,
  movies: [],
  page: 1,
  totalPages: null,
};

export const getTopRated = createAsyncThunk(
  "movie/getTopRated",
  async ({ page }) => {
    const url = `${url_base}/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=${page}`;

    const res = await apiService(url);

    return res;
  },
);

export const topRatedSlice = createSlice({
  name: "topRatedSlice",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.loading = false;
      state.error = null;
      state.page = 1;
    },
    currentPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopRated.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getTopRated.rejected, (state, action) => {
        state.error = "Erro!";
        state.movies = [];
        state.loading = false;
      });
  },
});

export const { reset, genre, currentPage } = topRatedSlice.actions;

export default topRatedSlice.reducer;
