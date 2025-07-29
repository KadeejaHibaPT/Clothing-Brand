import React from "react";
import './nav.css';
import { useState } from 'react';   
function Nav() {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <div className="navbar flex justify-between items-center bg-base-100 shadow-lg rounded-lg p-4 mb-4  py-2">
      <ul className="flex items-center gap-x-6">
        <h1 className="text-3xl font-bold text-primary">Lunara</h1>
        <li className="nav-item dropdown active">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            HOME
          </a>  
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">ABOUT</a></li>
        <li><a className="dropdown-item" href="#">HELP</a></li>
        <li><a className="dropdown-item" href="#">FAQ</a></li>
        <li><a className="dropdown-item" href="#">SUPPORT</a></li>
        <li><a className="dropdown-item" href="#">TERMS</a></li>
        <li><a className="dropdown-item" href="#">PRIVACY</a></li>
        <li><a className="dropdown-item" href="#">CAREERS</a></li>
      </ul>
    </li>

    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        SHOP
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">TRENDING</a></li>
        <li><a className="dropdown-item" href="#">POPULAR</a></li>
        <li><a className="dropdown-item" href="#">MOST BROUGHT</a></li>
        <li><a className="dropdown-item" href="#">NEW ARRIVALS</a></li>
        <li><a className="dropdown-item" href="#">SALE</a></li>
        <li><a className="dropdown-item" href="#">DISCOUNT</a></li>
        <li><a className="dropdown-item" href="#">OFFERS</a></li>
        <li><a className="dropdown-item" href="#">CLEARANCE</a></li>
        <li><a className="dropdown-item" href="#">GIFT CARDS</a></li>
        <li><a className="dropdown-item" href="#">GIFT VOUCHERS</a></li>
        <li><a className="dropdown-item" href="#">GIFT IDEAS</a></li>
        <li><a className="dropdown-item" href="#">GIFT SETS</a></li>
        <li><a className="dropdown-item" href="#">COMBO OFFER</a></li>
      </ul>
    </li>

    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        PAGES
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">FOR WOMEN</a></li>
        <li><a className="dropdown-item" href="#">FOR MEN</a></li>
        <li><a className="dropdown-item" href="#">FOR KIDS</a></li>
        <li><a className="dropdown-item" href="#">FOR NIGHTYS</a></li>
        <li><a className="dropdown-item" href="#">FOR FASHION</a></li>
        <li><a className="dropdown-item" href="#">FOR SPORTS</a></li>
        <li><a className="dropdown-item" href="#">FOR BEAUTY</a></li>
      </ul>
    </li>

    <li>BLOG</li>
    <li>CONTACT</li>
    <li>SERVICES</li>
  </ul>
  <div className="flex items-center gap-x-4">
    <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
      Cart ({count})
    </button>
    <button className="btn btn-secondary">Login</button>
    <button className="btn btn-secondary">Sign Up</button>  
    </div>
</div>

        </>
    );
}
export default Nav;