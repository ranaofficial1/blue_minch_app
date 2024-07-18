import React, { useState } from "react";
import logo from "../assets/Blue Minch logo.png";
// import { Link } from "react-router-dom";
import '../assets/css/Header.css'
import HeroContent from "./HeroContent";

const navList = [
  { class: "Home", class1: "HomeOpt", title: "Home", link: "/" },
  { class: "About", class1: "AboutOpt", title: "About", link: "/about" },
  { class: "Legend", class1: "LegendOpt", title: "Legend", link: "/legend" },
  { class: "Services", class1: "ServicesOpt", title: "Services", link: "/services", dropdown: [
    { title: "Web Development", link: "/Service1" },
    { title: "Digital Marketing", link: "/Service2" },
    { title: "Brading", link: "/Service3" },
    { title: "App Development", link: "/Service3" }

  ]},
  { class: "Clients", class1: "ClientsOpt", title: "Clients", link: "/clients" },
  { class: "People", class1: "PeopleOpt", title: "People", link: "/people" },
  { class: "Contact", class1: "ContactOpt", title: "Contact", link: "/contact" },
];
const Header = () => {
   
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav)
    console.log(setShowNav + "Clicked");
  }

  return (
    <>
       <div className="container pt-nav">
        <nav className="navbar rounded-pill">
          <div className="d-flex justify-content-between align-items-center w-full">
            <div className="logo2">
              <img src={logo} alt="logo" />
            </div>
            <button className="navbar-toggler" onClick={handleToggle}>
              ☰
            </button>
            <ul className={`list-inline mb-0 navItems ${showNav ? 'show': ""}`}>
              {navList.map((item, index) => (
                <li key={item.title} className="nav-item">
                  <a href={item.link} className={item.class1}>
                    {item.title}
                  </a>
                  {item.dropdown && (
                    <ul className="dropdown-menu">
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.title}>
                          <a href={dropdownItem.link}>{dropdownItem.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>  
      <HeroContent />
    </>
    
  );
};




export default Header;
