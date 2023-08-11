import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

function Card({id,title,imageUrl}) {
  return (
    <Link to={`/${id}`} className='card-wrapper'>
        <img src={imageUrl} alt={title} />
    </Link>
  )
}

export default Card