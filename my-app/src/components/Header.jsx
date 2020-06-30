import React from "react";

function NavBar(){
  return(
<div className="top-bar">
      <nav className="navbar navbar-expand-lg ">
       <a className="brand navbar-brand" href="#">amazon.in</a>
       <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">

            <li className="nav-item">
              <div>
                <form class='navbar-form'>
                     <div class='input-group'>
                       <input class='search-area form-control' type='text' name='search' placeholder='Search' />
                       <span class="input-group-btn">
                         <button type='submit' class='search btn btn-default'>
                           <span class='glyphicon glyphicon-search'></span>
                           <i class="fas fa-search"></i>
                         </button>
                       </span>
                  </div>
              </form>
             </div>
           </li>

           <li className="nav-item dropdown">
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
           <li className="nav-item ">
               <a className="nav-link" href="#">Try Prime</a>
           </li>
           <li className="nav-item">
               <a className="nav-link" href="#">Returns and Orders</a>
           </li>
      </ul>

       </div>
    </nav>

  </div>);
}
export default NavBar;
