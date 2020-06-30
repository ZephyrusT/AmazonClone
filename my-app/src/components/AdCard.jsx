import React from "react";

function AdCard(props){
  return (
    <div class="ad-container">
      <img src={props.link}/>
      <a href="#">{props.title}</a>
      <p>{props.brief}</p>
  </div>
)
}

export default AdCard;
