import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "../service/apiService"

const API_KEY = process.env.REACT_APP_API_KEY
const url_base = "https://api.themoviedb.org/3"

const initialState = {
  loading: false,
  error: null,
  movies: [],
  page: 1,
  totalPages: null
}

export const getNowPlaying = createAsyncThunk(
  "movie/getNowPlaying",
  async ({ page }) => {

    const url = `${url_base}/movie/now_playing?api_key=${API_KEY}&page=${page}&language=pt-BR`

    const res = await apiService(url)

    return res
  }
)

export const nowPlayingSlice = createSlice({
  name: "nowPlayingSlice",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.loading = false
      state.error = null
      state.page = 1
    },
    currentPage: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNowPlaying.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(getNowPlaying.fulfilled, (state, action) => {
        state.loading = false
        state.movies = action.payload.results
        state.totalPages = action.payload.total_pages
      })
      .addCase(getNowPlaying.rejected, (state, action) => {
        state.error = "Erro!"
        state.movies = []
        state.loading = false
      })
  }
})

export const { reset, genre, currentPage } = nowPlayingSlice.actions

export default nowPlayingSlice.reducer