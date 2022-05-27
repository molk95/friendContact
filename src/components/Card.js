import React from 'react';

const Card = ({id, name, email})=> {
    
    return (
        <div className='tc dib br3 pd3 ma2 grow bw2 shadow-s card'>
            <img alt='robot' style={{height:300, width:300}} src={`https://robohash.org/${id}?set=set4`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;