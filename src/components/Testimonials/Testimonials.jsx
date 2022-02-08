import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {

  const data=[
    {
      id:"1",
      name:"Jim",
      title:"CM",
      img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      icon:"https://www.freeiconspng.com/thumbs/person-icon/person-icon-person-icon-clipart-image-from-our-icon-clipart-category--9.png",
      desc:"Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
    },
    {
      id:"2",
      name:"Monika",
      title:"CO",
      img:"assets/monika.jpg",
      icon:"https://www.freeiconspng.com/thumbs/person-icon/person-icon-person-icon-clipart-image-from-our-icon-clipart-category--9.png",
      desc:"Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
      featured:true,
    },
    {
      id:"3",
      name:"Priya",
      title:"CTO",
      img:"https://www.pikpng.com/pngl/m/4-47557_business-man-png-free-image-download-professional-photo.png",
      icon:"https://www.freeiconspng.com/thumbs/person-icon/person-icon-person-icon-clipart-image-from-our-icon-clipart-category--9.png",
      desc:"Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
    },
    
    

  ];

  return (
  <div className="Testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p)=>(

       
        <div className={p.featured?"card featured" : "card"}>
          <div className="top">
        <img src="assets/right.png" className="left" alt="" />
        <img src={p.img}  className="user" alt="" />
        <img src="assets/writing.png" className="right" alt="" />
          </div>
        
        <div className="center">
        {p.desc} 
        </div>
        <div className="bottom">
          <h3>{p.name}</h3>
          <h4>{p.title}</h4>
        </div>
      
      </div>
        ))}
      </div>
  </div>
  )
};

export default Testimonials;
