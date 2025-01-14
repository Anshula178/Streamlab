import React from 'react'
import { IMG_URL } from '../../helper/apirequest'
import { useDispatch } from 'react-redux';
import { fetchVideoDetails } from '../../features/common/CommonSlice';
import { useNavigate } from 'react-router-dom';
import Rating from '../Common/Rating';

const Card = (props) => {
  const { video,platform } = props;
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleShowDetails=()=>{
       dispatch(fetchVideoDetails({platform:platform,id:video.id}))
       navigate(`/details/${platform}/${video.id}`)
  }
  return (
      
      <div className='rounded-md overflow-hidden relative cursor-pointer group' onClick={handleShowDetails}>
          <img className='max-w-full inline-block' src={IMG_URL + video.backdrop_path} />
          <div>
              
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent text-white'>
              <div className='h-24 absolute left-0 p-4 bg-gradient-to-t from-slate-900 to-transparent -bottom-9 w-full group-hover:bottom-0 transition-all duration-300'>
                  <h5 className='w-5/6 font-display text-xl truncate mb-4'>{video.title || video.original_title || video.name || video.original_name}</h5>
                  <Rating voteAverage={video.vote_average} voteCount={video.vote_count} />
              </div>
          </div>
      </div>
      </div>
     
  );
}

export default Card
