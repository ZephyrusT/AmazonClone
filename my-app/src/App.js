import React from "react";
import NavBar from "./components/Header"
import Card from "./components/Card";
import AdCard from "./components/AdCard"
import Carousel from "./components/Carousel"


function App() {
  return (
     <div>
    <NavBar/>
    <div>


    <Card title="Just Launched | at 700"  source="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Sony/XB-700/Sony_D_CC_1x._SY304_CB429798648_.jpg"/>
    <Card title="For efficient home decoration" source="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"/>
    <Card title="Sale on Microwaves| 70%" source="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Desktop-category-card-adapt_379x304_2._SY304_CB429612182_.jpg"/>
    <Card title="50% off | Chimneys| Buy now" source="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg"/>
    </div>
    <img class="banner img-fluid" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"/>
    <h2>Top subscriptions apps on amazon</h2>
   <Carousel/>

    </div>
  );
}

export default App;
