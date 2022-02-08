import React, { useState } from 'react';
import './Works.scss';

const Works = () => {

  const [currentslider, setCurrentslider] = useState(0);

  const data=[
    {
    id:"1",
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aL1A4XlhDN8QkrZXXF2jVaVW-H0kXj7leCRu5OnvGt--qIUR1p9Csmb4DSIHo1TYndM&usqp=CAU",
    title:"Anur cloud technologies",
    desc:"We enable BFSI to digitize their customer onboarding and create convenience with AI/ML-based technology.",
    img:"https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      id:"2",
      icon:"data:image/png;base64,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",
      title:"City union bank",
      desc:"City Union Bank Limited is an Indian bank headquartered in Kumbakonam, Tamil Nadu. The bank was initially named Kumbakonam Bank Limited, and was incorporated on 31 October 1904.",
      img:"https://images.unsplash.com/photo-1593632717071-218c1d85c663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2xvYmV8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id:"3",
      icon:"assets/Branding.jpg",
      title:"Branding",
      desc:"Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds. ",
      img:"https://www.currentconsulting.co.za/wp-content/uploads/2016/11/Branding.jpg",
      },
    {
        id:"3",
        icon:"assets/Branding.jpg",
        title:"Branding",
        desc:"Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds. ",
        img:"https://www.currentconsulting.co.za/wp-content/uploads/2016/11/Branding.jpg",
        },   
        {
          id:"3",
          icon:"assets/Branding.jpg",
          title:"Branding",
          desc:"Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds. ",
          img:"https://www.currentconsulting.co.za/wp-content/uploads/2016/11/Branding.jpg",
          },   


  ];


  const handleClick=(way)=>{
    way === "left" 
   ? setCurrentslider(currentslider > 0 ? currentslider - 1 : 2 ) 
   : setCurrentslider(currentslider < data.length-1 ? currentslider + 1 : 0 );
  };

  return (
  <div className="Works" id="works">
    <div className="slider" style={{ transform:`translateX(-${currentslider * 100}vw)` }}>
    {data.map((d)=>(
    <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftcontainer">
              <div className="imgcontainer">
                 <img src={d.icon} alt="" />
              </div>
              <h2>{d.title}</h2>
              <p>
              {d.desc}
              </p>
              <span>Project</span>
            </div>
          </div>
          <div className="right">
            <img src={d.img} alt="" />
          </div>
        </div>
      </div>
      ))}
    </div>
    <img src="assets/right2.png" className="arrow left" alt=""  onClick={()=>handleClick("left")}/>
    <img src="assets/right2.png" className="arrow right" alt="" onClick={()=>handleClick()} />
  </div>
  )
};

export default Works;
