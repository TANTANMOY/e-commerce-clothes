import React from "react";
import "./menuitem.scss";

const menuitem = ({ Title, imageurl, size }) => {
  return (
    <div
      className={`${size} menu-item`}
    >
        <div className='background-image' 
         style={{ backgroundImage: `url(${imageurl})` }} />
      <div className="content">
        <div className="title">{Title.toUpperCase}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default menuitem;
