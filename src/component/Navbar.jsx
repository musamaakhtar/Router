import React from 'react'
import {Link} from 'react-router-dom'
export default function navbar() {
  return (
    <div className='bg-black '>
    <nav className="navbar w-[100%] z-10 h-[11vh] fixed font-serif navbar-expand-lg bg-[lightblue]">
  <div className="container-fluid">
   <Link to="/"> <a className="navbar-brand  font-bold" href="#">Home</a> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="about"><a className="nav-link active font-bold" aria-current="page" href="#">About</a></Link>
        </li>
        <li className="nav-item">
     <Link to="contact"> <a className="nav-link font-bold" href="#">Contact</a></Link>
        </li>
        <li className="nav-item">
     <Link to="Sign"> <a className="nav-link font-bold" href="#">Sign In</a></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Next Page</a></li>
            <li><a className="dropdown-item" href="#">Previous Page</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Home Page</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-light font-bold text-xl ">Router</button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
