import React from "react";

function NavBar(){
  return(
<div className="top-bar">
      <nav className="navbar navbar-expand-xl ">
       <a className="brand navbar-brand" href="#">amazon.in</a>
       <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item search-div col-xs-12 col-sm-12 col-md-8  col-lg-10 col-xl-9 ">
               <div class="search-box">
                 <form class="form" class="search-bar" type="search">
                   <div class="form-group">
                      <div class="input-group">
                        <input type="text" name="search" class="form-control search-area" placeHolder="search"/>
                        <div class="search-icon"><button  class="btn"><i class="fa fa-search fa-lg"></i></button></div>
                      </div>
                   </div>
                 </form>

             </div>
           </li>

           <li className="nav-item dropdown col-xs-12 col-md-12 col-lg-12 col-xl-3">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounts and Lists</a>
                  <div className="dDown dropdown-menu">
                       <a className="dropdown-item" href="#">Your account</a>
                       <a className="dropdown-item" href="#">Your orders</a>
                       <a className="dropdown-item" href="#">Buy again</a>
                   <div className="dropdown-divider"></div>
                       <a className="dropdown-item" href="#">Your reccomendation</a>
                       <a className="dropdown-item" href="#">Try Prime</a>
                       <a className="dropdown-item" href="#">Your subscriptions</a>
                       <a className="dropdown-item" href="#">Your Seller Account</a>
                   </div>
           </li>
           <li className="nav-item col-xs-12 col-md-12 col-lg-12 col-xl-2">
               <a className="nav-link" href="#">Try Prime</a>
           </li>
           <li className="nav-item col-xs-12 col-md-12 col-lg-12 col-xl-2">
               <a className="nav-link" href="#">Returns and Orders</a>
           </li>
      </ul>

       </div>
    </nav>

  </div>);
}
export default NavBar;
