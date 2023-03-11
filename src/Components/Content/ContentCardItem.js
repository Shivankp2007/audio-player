import React from 'react';
import Image from '../Middle/Images/Image.jpg';


function ContentCardItem() {
  return (
    <div className='item'>
      <a href="/playlist1">
      <div className="card">
        <div className="card-img">
            <img className='image' src={Image} alt="" />
        </div>
        <div className="card-name">Daily Mix 2</div>
        <div className="card-info">Badshah,Vijay Prakash,Meet bros,and more</div>
      </div>
      </a>
    </div>
  )
}

export default ContentCardItem
