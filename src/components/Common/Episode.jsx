import React from 'react';
import { IMG_URL } from '../../helper/apirequest';

function Episode(props) {
    const {episode}=props;
    const{episode_number,name,overview,runtime,still_path}=episode;
    return (
        <div className='p-4 flex items-center'>
          <div className="w-10">{episode_number}</div>
           <div className="w-1/5"><img className='max-w-full inline-block' src={IMG_URL+still_path}/></div>
           <div className='w-2/4'>
            <h4 className='text-2xl font-semibold'>{name}</h4>
            <p className='text-lg'>{overview}</p>
           </div>
        </div>
    );
}

export default Episode;