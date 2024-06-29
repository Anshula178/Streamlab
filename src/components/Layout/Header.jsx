import React, { useEffect, useState } from 'react';
import { IMG_URL } from '../../helper/apirequest';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, selectHeaderDetails } from '../../features/common/CommonSlice';
import GenresList from '../Common/GenresList';
import { Link } from 'react-router-dom';
import Rating from '../Common/Rating';
import VideoPlayer from '../Common/VideoPlayer';

const Header = (props) => {
  const { video, platform } = props;
  const[isTrailer,setIsTrailer]=useState(false)
  const dispatch = useDispatch();
  const { data, error, status } = useSelector(selectHeaderDetails);
 

  useEffect(() => {
    if (video && platform) {
      dispatch(fetchHeaderDetails({ platform: platform, id: video.id }));
    }
  }, [video, platform, dispatch]);

  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const textformat = (text) => {
    if (text && text.length > 120) {
      return text.slice(0, 120) + '...';
    } else {
      return text;
    }
  };
  const formatedDate=(date)=>{
    return new Date(date).getFullYear();
 }
 const playTrailer=()=>{
  setIsTrailer(true);
  
 }

  return (
    <div>
      <div className='h-dvh relative'>
        {
          isTrailer ?
        <VideoPlayer  videosList={data?.videos.results}/>:
        <>
        <img className='w-full h-full object-cover object-center' src={IMG_URL + data?.backdrop_path} alt="" />
        <div className='absolute z-20 top-1/2 left-16 max-w-2xl -translate-y-1/2 w-full pe-6 text-white'>
          <h2 className='font-display text-6xl mb-5'>{data?.name || data?.original_name || data?.title || data?.original_title}</h2>
          <h3 className='text-4xl text-yellow-500 font-alternate'>{data?.tagline !== "" && data?.tagline}</h3>
          <p className='text-xl py-2'>
            {expanded ? data?.overview : textformat(data?.overview)}
            { data?.overview.length > 120 && (
              <span onClick={toggleExpand} className='text-blue-500 cursor-pointer ml-2'>
                
                {expanded ? 'show less' : 'read more'}
              </span>
            )}
          </p>
          <p className='text-xl py-2 '>({formatedDate(data?.first_air_date)})</p>
          <GenresList genres={data?.genres} platform={platform} />
          <Rating voteAverage={data?.vote_average} voteCount={data?.vote_count}/>
          <Link className='mt-4 inline-block  py-2 px-6 rounded bg-yellow-500 text-white' to={`/details/${platform}/${data?.id}`}>View</Link>
          <button className='inline-block  py-2 px-6 rounded ms-3 bg-yellow-500 text-white' onClick={playTrailer}>Play</button>
        </div>
        <div className='absolute left-0 top-0 bg-gradient-to-r from-slate-950 to-transparent w-full max-w-4xl h-full'></div>
        <div className='absolute left-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent w-full h-80'></div>
        </>
}
      </div>
     
    </div>
  );
};

export default Header;
