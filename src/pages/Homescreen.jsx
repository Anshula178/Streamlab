import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOrginals } from '../features/tv/tvSlice';
import Header from '../components/Layout/Header';
import Row from '../components/Layout/Row';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpComingMovies, selectNowPlayingMovies, selectPopularMovies, selectTopRatedMovies, selectUpCommingMovies } from '../features/movie/movieSlice';
import { platformTypes } from '../helper/apirequest';

function Homescreen(props) {
    const { data, status, error } = useSelector(selectNetflixOrginals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>
            {
                status === "success" ?
                    < Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformTypes.tv} />
                    : ""
            }
            <div className='px-4 relative -top-32'>
            <Row title=" Top Rated Movies" action={fetchTopRatedMovies} selector={selectTopRatedMovies} platform={platformTypes.movie} />
            <Row title=" Upcoming Movies" action={fetchUpComingMovies} selector={selectUpCommingMovies} platform={platformTypes.movie} />
            <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={selectNetflixOrginals} platform={platformTypes.tv} />
            <Row title="Popular Movies" action={fetchPopularMovies} selector={selectPopularMovies} platform={platformTypes.movie} />
                <Row title="Now Playing Movies" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} platform={platformTypes.movie} />
                   




            </div>
        </>
    );
}

export default Homescreen;