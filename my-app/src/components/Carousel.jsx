import React from "react";
import AdCard from "./AdCard"
function Carousel(){

return(    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
             <div className="carousel-container">
               <div className="carousel-item active">

                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/812PmlRw5vL._AC_UL270_SR270,270_.png" title="Online Wicked Horror TV" brief="Watch ghost "/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/61XUpSw2mOL._AC_UL270_SR270,270_.png" title="car parking 3d simulation" brief="A car game"/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/71TivND2HyL._AC_UL270_SR270,270_.png" title="Martial Art and Kung-fu" brief="Media stream"/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/812PmlRw5vL._AC_UL270_SR270,270_.png" title="Online Wicked Horror TV" brief="Watch ghost "/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/61XUpSw2mOL._AC_UL270_SR270,270_.png" title="car parking 3d simulation" brief="A car game"/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/71TivND2HyL._AC_UL270_SR270,270_.png" title="Martial Art and Kung-fu" brief="Media stream"/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/812PmlRw5vL._AC_UL270_SR270,270_.png" title="Online Wicked Horror TV" brief="Watch ghost "/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/61XUpSw2mOL._AC_UL270_SR270,270_.png" title="car parking 3d simulation" brief="A car game"/>
                      <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/71TivND2HyL._AC_UL270_SR270,270_.png" title="Martial Art and Kung-fu" brief="Media stream"/>

                 </div>
              <div className="carousel-item">
              <AdCard  link="https://images-eu.ssl-images-amazon.com/images/I/41IiZVs1VcL._AC_UL270_SR270,270_.png" title="Met Opera on Demand" brief="The famous Opera" />
              <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/61XUpSw2mOL._AC_UL270_SR270,270_.png" title="car parking 3d simulation" brief="A car game"/>
              <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/71TivND2HyL._AC_UL270_SR270,270_.png" title="Martial Art and Kung-fu" brief="Media stream"/>
              <AdCard  link="https://images-eu.ssl-images-amazon.com/images/I/41IiZVs1VcL._AC_UL270_SR270,270_.png" title="Met Opera on Demand" brief="The famous Opera" />
              <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/61XUpSw2mOL._AC_UL270_SR270,270_.png" title="car parking 3d simulation" brief="A car game"/>
              <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/71TivND2HyL._AC_UL270_SR270,270_.png" title="Martial Art and Kung-fu" brief="Media stream"/>
              <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/812PmlRw5vL._AC_UL270_SR270,270_.png" title="Online Wicked Horror TV" brief="Watch ghost "/>
              <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/61XUpSw2mOL._AC_UL270_SR270,270_.png" title="car parking 3d simulation" brief="A car game"/>
              <AdCard link="https://images-eu.ssl-images-amazon.com/images/I/71TivND2HyL._AC_UL270_SR270,270_.png" title="Martial Art and Kung-fu" brief="Media stream"/>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>

       </a>
       <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
    </a>
  </div>)
}

export default Carousel;
