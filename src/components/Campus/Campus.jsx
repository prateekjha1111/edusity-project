import React from "react";
import "./Campus.css";
import gallery_img1 from "../../assets/gallery-1.png";
import gallery_img2 from "../../assets/gallery-2.png";
import gallery_img3 from "../../assets/gallery-3.png";
import gallery_img4 from "../../assets/gallery-4.png";
import arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_img1} />
        <img src={gallery_img2} />
        <img src={gallery_img3} />
        <img src={gallery_img4} />
      </div>
      <button className="btn dark-btn">
        See more here
        <img src={arrow} />
      </button>
    </div>
  );
};

export default Campus;
