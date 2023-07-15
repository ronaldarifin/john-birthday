import React from 'react';
import './Card.css'; // assuming you have a CSS file for styling

const Card = ({ pictureFile, message, sender }) => {
  return (
    <div className='card-container Card'>
      <img src={pictureFile} alt={sender} className='card-image'/>
      <div className='card-content'>
        <h2 className='card-sender'>{sender}</h2>
        <p className='card-message'>{message}</p>
      </div>
    </div>
  );
};

export default Card;
