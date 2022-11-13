import React from "react"

import Search from "../../components/Search/SearchComponent"

import Property from "./Property/Property"

import './Home.css'

const Home = () => {
  return (
    <div className="HomePage">
      <Search />
      <Property />
    </div>
  )
}

export default Home
