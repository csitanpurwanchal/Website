import React from 'react';
import './Card.css';

function Card({ title, body, icon }) {
  return (
    <div className='card-container'>
      <div className="icon-container">
        {icon}
      </div>
      <div className="card-title">
        <h5>{title}</h5>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Card;
