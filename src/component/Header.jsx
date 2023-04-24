import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (

        <> 
            <div className="container-fluid mb-4">
                
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 bg-warning fixed-top">

                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active  fw-bold me-5" aria-current="page" to="create">CreateProduct</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  fw-bold me-5" to="show">ShowProduct</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}