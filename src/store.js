import {configureStore} from "@reduxjs/toolkit"

import byGenreSlice from "./slices/byGenreSlice"
import popularSlice from "./slices/popularSlice"
import topRatedSlice from "./slices/topRatedSlice"
import byDetails from "./slices/byDetails"
import nowPlayingSlice from "./slices/nowPlayingSlice"
import searchSlice from "./slices/searchSlice"

const store = configureStore({
  reducer: {
    byGenreSlice,
    popularSlice,
    topRatedSlice,
    byDetails,
    nowPlayingSlice,
    searchSlice
  }
})

export default store