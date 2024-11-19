import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import { Testimonial } from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="our program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle={"gallery"} title={"Campus Photos"} />
        <Campus />
        <Title subTitle={"testimonials"} title={"What Students Say"} />
        <Testimonial />
        <Title subTitle={"Contact Us"} title={"Get in Touch"} />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
