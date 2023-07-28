import React from 'react';

const MovieCard= ({Title,Rating,Description,PostUrl}) => {
        return (
            <div className='card mt-5'>
                <div className="card-image">
                    <img  src={PostUrl} alt={Title}></img>
                </div>
                <div className="card-body">
                    <h3>{Title} </h3>
                    <span>{Rating} </span>
                    <span>{Description} </span>
                </div>   
            </div>
        )
    }
  



export default MovieCard; 