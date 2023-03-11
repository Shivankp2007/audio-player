import React from "react";
import Profile from '../Middle/Images/Profile.png'
import Back from '../Middle/Images/Back.png'
import Front from '../Middle/Images/Front.png';
import Itemrow from "./Itemrow";
import MiddleRow from "../Middle/MiddleRow";


function Content() {
  return (
    <div className="Content">
      <div className="Content-Up">
        <div className="Content-top">
            <div className="top-left">
            <button className="bck-frt-btn"><img src={Back} alt="" /></button>
            <button className="bck-frt-btn"><img src={Front} alt="" /></button>
            </div>
            <div className="top-right">
                <button className="Pre-btn">Premium Plans</button>
                <button className="Pro-btn">
                    <div className="pro">
                    <img src={Profile} alt="" className="pr"/>
                    </div>
                    Shivank
                    <img src="" alt="" />
                </button>
            </div>
        </div>
        <div className="Content-middle">
            <div className="now"></div>
            <div className="wish">Good Evening</div>
            <MiddleRow/>
            <MiddleRow/>
        </div>
      </div>
      <Itemrow/>
      <Itemrow/>
      <Itemrow/>
      <Itemrow/>
      <Itemrow/>
    </div>
  );
}

export default Content;
