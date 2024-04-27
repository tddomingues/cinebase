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

export const getSearch = createAsyncThunk(
  "movie/getSearch",
  async ({ page, query }, thunkAPI) => {
    const url = `${url_base}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=pt-BR`;

    const res = await apiService(url);

    if (res.success === false) {
      return thunkAPI.rejectWithValue({ message: res.status_message });
    }

    return res;
  },
);

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.loading = false;
      state.error = null;
      state.page = 1;
    },
    currentPage: (state, action) => {
      console.log(action.payload);
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearch.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getSearch.rejected, (state, action) => {
        state.error = "Erro!";
        state.movies = [];
        state.loading = false;
      });
  },
});

export const { reset, currentPage } = searchSlice.actions;

export default searchSlice.reducer;
