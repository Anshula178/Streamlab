import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../helper/axios";
import { apiRequests, endpoints, platformTypes } from "../../helper/apirequest";

const initialState = {
    nowPlayingMovies: {
        status: "idle",
        data: null,
        error: null
    },
    popularMovies: {
        status: "idle",
        data: null,
        error: null
    },
    topRatedMovies: {
        status: "idle",
        data: null,
        error: null
    },
    upCommingMovies: {
        status: "idle",
        data: null,
        error: null
    }
}


export const fetchNowPlayingMovies = createAsyncThunk(
    'movie/fetchNowPlayingMovies',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.movie, endpoints.nowPlaying));
        return response.data
    }
)
export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.movie, endpoints.popular));
        return response.data
    }
)
export const fetchTopRatedMovies = createAsyncThunk(
    'movie/fetchTopRatedMovies',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.movie, endpoints.topRated));
        return response.data
    }
)
export const fetchUpComingMovies = createAsyncThunk(
    'movie/fetchUpComingMovies',
    async () => {
        const response = await instance.get(apiRequests.getCollection(platformTypes.movie, endpoints.upcoming));
        return response.data
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNowPlayingMovies.pending, (state) => {
                state.nowPlayingMovies.status = "loading";
            })
            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                state.nowPlayingMovies.status = "success";
                state.nowPlayingMovies.data = action.payload;
            })
            .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
                state.nowPlayingMovies.status = "failed";
                state.nowPlayingMovies.error = action.error;
            }).addCase(fetchPopularMovies.pending, (state) => {
                state.popularMovies.status = "loading";
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.popularMovies.status = "success";
                state.popularMovies.data = action.payload;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.popularMovies.status = "failed";
                state.popularMovies.error = action.error;
            }).addCase(fetchTopRatedMovies.pending, (state) => {
                state.topRatedMovies.status = "loading";
            })
            .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
                state.topRatedMovies.status = "success";
                state.topRatedMovies.data = action.payload;
            })
            .addCase(fetchTopRatedMovies.rejected, (state, action) => {
                state.topRatedMovies.status = "failed";
                state.topRatedMovies.error = action.error;
            }).addCase(fetchUpComingMovies.pending, (state) => {
                state.upCommingMovies.status = "loading";
            })
            .addCase(fetchUpComingMovies.fulfilled, (state, action) => {
                state.upCommingMovies.status = "success";
                state.upCommingMovies.data = action.payload;
            })
            .addCase(fetchUpComingMovies.rejected, (state, action) => {
                state.upCommingMovies.status = "failed";
                state.upCommingMovies.error = action.error;
            })
    }
});

export const selectNowPlayingMovies = (state) => state.movie.nowPlayingMovies;
export const selectPopularMovies = (state) => state.movie.popularMovies;
export const selectTopRatedMovies = (state) => state.movie.topRatedMovies;
export const selectUpCommingMovies = (state) => state.movie.upCommingMovies;

export default movieSlice.reducer;