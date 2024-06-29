import { faStar, faStarHalfAlt } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar  } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Rating = (props) => {
    const {voteAverage,voteCount}=props;
    let voteRating=voteAverage/2;
    const voteArr=[...Array(5)];
  return (
    <div className='flex'>
      {
       voteArr.map(( item,index)=>{
        if(index<Math.floor(voteRating)){
          return <FontAwesomeIcon icon={solidStar}></FontAwesomeIcon>
        }
        else if(index<voteRating){
          return <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
        }
        else{
          return <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        }
       })
      }
      <p className='ms-3'>{voteCount} views</p>
    </div>
  )
}
export default Rating
