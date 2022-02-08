import React,{useState,useEffect} from 'react';
import "./Portfolio.scss"
import Portfoliolist from '../Portfoliolist/Portfoliolist.jsx';
import {
  featuredportfolio,
  webportfolio,
  mobileportfolio,
  designportfolio,
} from "../../Data.js";


const Portfolio = () => {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([])

  const list=[
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"web",
      title:"Web App",
    },
    {
      id:"mobile",
      title:"Mobile App",
    },
    {
      id:"design",
      title:"Design",
    },
    {
      id:"content",
      title:"Content",
    },

  ];

  useEffect(() => {
    
    switch (selected){

      case "featured":
           setData(featuredportfolio);
           break;
      case "web":
           setData(webportfolio);
           break;
      case "mobile":
            setData(mobileportfolio);
            break;
      case "design":
            setData(designportfolio);
            break;
      default:
        setData(featuredportfolio);
        

    }
    
  }, [selected])

  return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
        {list.map(item=>(
        <Portfoliolist   
        title={item.title} 
        active={selected === item.id}
        setSelected={setSelected}
        id={item.id}
        />
         
        ))}
        </ul> 

        <div className="container">

          {data.map((d)=>(
            <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
           </div>

          ))}
          
         

        </div>

      </div>
  )
};

export default Portfolio;
