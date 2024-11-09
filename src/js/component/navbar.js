import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 d-flex justify-content-between" style={{backgroundImage: "url(https://img.freepik.com/free-photo/background_53876-32170.jpg?t=st=1730574678~exp=1730578278~hmac=7749a498e54bee0f6a379f411199353dd8e326be1ef8532f1afb62ee997e3710&w=740)", 
		padding:"0 100px", minWidth: "100%"}}>
			<div className="d-flex align-items-center">
				<img className="ms-5" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG37.png" alt="Star Wars Logo" style={{height:"60px", width: "auto"}}/>
			</div>
			<div className="d-flex align-items-center">
			   <div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Favorites</button>
					<ul class="dropdown-menu drop-down-menu-end">
                         <li><a class="dropdown-item" href="#">Action</a></li>
                         <li><a class="dropdown-item" href="#">Another action</a></li>
                         <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
			   </div>
			</div>
		</nav>
	);
};
