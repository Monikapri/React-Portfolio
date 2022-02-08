import React,{useEffect,useRef} from 'react';
import './Intro.scss';
import {init} from 'ityped';

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{
      showCursor:true,
      backDelay:1500,
      backSpeed:60,
      strings:['A Developer',' And a Designer']
    }); 
  }, [])

  return (
  <div className="Intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/person.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Monika</h1>
          <h3>And here is my Portfolio <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
  </div>
  )
};

export default Intro;
