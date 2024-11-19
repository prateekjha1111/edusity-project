import React, { useRef } from "react";
import "./Testimonial.css";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

export const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonial">
      <img src={back_icon} className="back-icon" onClick={slideBackward} />
      <img src={next_icon} className="next-icon" onClick={slideForward} />
      <div className="slider" ref={slider}>
        <div className="slide">
          <div className="user-info">
            <img src={user1} />
            <div>
              <h3>Emily Williams</h3>
              <span>Edusity, USA</span>
            </div>
          </div>
          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        <div className="slide">
          <div className="user-info">
            <img src={user2} />
            <div>
              <h3>William Jackson</h3>
              <span>Edusity, USA</span>
            </div>
          </div>
          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        <div className="slide">
          <div className="user-info">
            <img src={user3} />
            <div>
              <h3>Emma Stone</h3>
              <span>Edusity, USA</span>
            </div>
          </div>
          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        <div className="slide">
          <div className="user-info">
            <img src={user4} />
            <div>
              <h3>Joe Watson</h3>
              <span>Edusity, USA</span>
            </div>
          </div>
          <p>
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
      </div>
    </div>
  );
};
