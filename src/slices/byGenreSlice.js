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

export const getByGenre = createAsyncThunk(
  "movie/getByGenre",
  async ({ page, type }, thunkAPI) => {
    const url = `${url_base}/discover/movie?api_key=${API_KEY}&with_genres=${type}&page=${page}&language=pt-BR`;

    const res = apiService(url);

    return res;
  },
);

export const byGenreSlice = createSlice({
  name: "byGenreSlice",
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
      .addCase(getByGenre.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.movies = [];
      })
      .addCase(getByGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getByGenre.rejected, (state, action) => {
        state.error = "Erro!";
        state.movies = [];
        state.loading = false;
      });
  },
});

export const { reset, genre, currentPage } = byGenreSlice.actions;

export default byGenreSlice.reducer;
