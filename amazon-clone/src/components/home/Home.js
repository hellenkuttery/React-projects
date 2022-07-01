import React from "react";
import Carousel from "nuka-carousel";
import Container from '@mui/material/Container';
import Product from "../products/Product";
import "./Home.css"


const Home = () => {
  return (
<div >
    <Container maxWidth="lg" className="home">
    {/* nuka carousel */}
      <Carousel>
        <img src="https://hmloneonta.org/wp-content/uploads/2016/11/amazon-smile-slider.png?x14533" height="300px"/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg"height="300px" />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/3_ScaleCallouts_PC_09.jpg"height="300px"  />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-10-Coupon_PC.gif" height="300px" />
        <img src="https://trak.in/wp-content/uploads/2020/08/IMG_20200808_191750-1024x390.jpg" />
      </Carousel>
    <div className="row">
    <Product/>
    <Product/>
    
    </div>
  
    <div className="row">
    <Product/>
    <Product/>
    <Product/>
    
    </div>
    <div className="row">
    <Product/>
    <Product/>
   
    </div>
      
    </Container>
    </div>
  );
};

export default Home;
