import React from "react";


function Card(props) {
  return(
    <div class="card-container">
    <h2>{props.title}</h2>
    <img src={props.source}/>
    <a href="#">see more</a>
    </div>
  )


}

export default Card;
