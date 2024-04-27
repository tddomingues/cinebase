import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../service/apiService";

const API_KEY = process.env.REACT_APP_API_KEY;
const url_base = "https://api.themoviedb.org/3";

const initialState = {
  loading: false,
  error: null,
  details: {},
  credits: [],
  video: {},
};

export const getByDetails = createAsyncThunk(
  "movie/getByDetails",
  async (id, thunkAPI) => {
    const url = `${url_base}/movie/${id}?api_key=${API_KEY}&language=pt-BR`;

    const res = await apiService(url);

    if (res.success === false) {
      return thunkAPI.rejectWithValue({ message: res.status_message });
    }

    return res;
  },
);

export const getCredits = createAsyncThunk(
  "movie/getCredits",
  async (id, thunkAPI) => {
    const url = `${url_base}/movie/${id}/credits?api_key=${API_KEY}&language=pt-BR`;

    const res = await apiService(url);

    if (res.success === false) {
      return thunkAPI.rejectWithValue({ message: res.status_message });
    }

    return res;
  },
);

export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (id, thunkAPI) => {
    const url = `${url_base}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

    const res = await apiService(url);

    if (res.success === false) {
      return thunkAPI.rejectWithValue({ message: res.status_message });
    }

    return res;
  },
);

export const byDetails = createSlice({
  name: "byDetails",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.loading = false;
      state.error = null;
      state.page = 1;
      state.details = {};
      state.credits = [];
    },
    currentPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getByDetails.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getByDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(getByDetails.rejected, (state, action) => {
        state.error = "Erro!";
        state.details = {};
        state.loading = false;
      })
      .addCase(getCredits.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCredits.fulfilled, (state, action) => {
        state.loading = false;
        state.credits = action.payload.cast.splice(0, 20);
      })
      .addCase(getCredits.rejected, (state, action) => {
        state.error = "Erro!";
        state.credits = [];
        state.loading = false;
      })
      .addCase(getMovie.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload.results.find(
          (video) => video.type === "Trailer",
        );
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.error = "Erro!";
        state.video = {};
        state.loading = false;
      });
  },
});

export const { reset, genre, currentPage } = byDetails.actions;

export default byDetails.reducer;
