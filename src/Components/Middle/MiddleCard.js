import React from 'react';
import Image from '../Middle/Images/Image.jpg';


export default function MiddleCard() {
  return (
    <div className='middle-card'>
        <img src={Image} alt=""  className='middle-img'/>
        <text>Liked Songs</text>
    </div>
  )
}
