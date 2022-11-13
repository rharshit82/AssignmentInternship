import React, { useState } from "react"
import "./Header.css"
import { Link} from "react-router-dom"
import {ReactComponent as Logo} from './logo.svg'
const Header = () => {
  const [navList, setNavList] = useState(false)
  return (
    <>
        <div className="container flex">
          <div className="logo">
            <h1>
              <Logo style={{height: "1.2rem", width: "1.2rem"}}/>
              <Link to={"/"}>Estatery</Link>
            </h1>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {<>
                <li key={1}>
                  <Link to={`/rent`}>Rent</Link>
                </li>
                <li key={2}>
                  <Link to={`/buy`}>Buy</Link>
                </li>
                <li key={3}>
                  <Link to={`/sell`}>Sell</Link>
                </li>
                <li key={4}>
                  <Link to="/manage-property">Manage Property</Link>
                </li>
                <li key={5}>
                  <Link to={`/resources`}>Resources</Link>
                </li>
              </>}
            </ul>
          </div>
          <div className="button flex">
            <h4>
               <Link to={'/favourites'}>Favourites</Link>
            </h4>
            <button className="btn">
            <i className="fa-sharp fa-solid fa-arrow-right-to-bracket"></i> Login
            </button>
            <button className="btn rightbutton">
            <i className="fa-solid fa-right-to-bracket"></i> Sign Up
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
    </>
  );
}

export default Header
