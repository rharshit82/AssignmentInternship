import React from "react"
import { properties } from "../../../config/Data"

import {ReactComponent as HeartLogo} from './../../../components/images/heart.svg'
const singleProperty = () => {
  return (
    <div className="">
      <div className='content grid3 mtop'>
        {properties.map((val, index) => {
          const { id,
            cover,
            category,
            location,
            name,
            price,
            type,
            beds,
            bathrooms,
            area,
          } = val;
          return (
            <div className="singleCard box shadow" key={index}>
              <div className="img">
                <img style={{height: "40vh"}} src={cover} alt="" />
              </div>
              <div className="pricediv">
                <div style={{ display: "flex" }}>
                  <div className="price">${price}</div>
                  <p>/month</p>
                </div>
                <span>{type}</span>
              </div>
              <button className="btn6">Popular</button>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <HeartLogo className="heart"  />
                </div>
                <h4>{name}</h4>
                <p>
                 {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <i
                    className="fa-solid fa-bed"
                    style={{ padding: "0 3px" }}
                  ></i>
                  <span style={{ padding: "0 3px" }}>{beds} Beds</span>
                  <i
                    className="fa-sharp fa-solid fa-bath"
                    style={{ padding: "0 3px" }}
                  ></i>
                  <span style={{ padding: "0 3px" }}>
                    {bathrooms} Bathrooms
                  </span>
                  <i
                    className="fa-solid fa-chart-area"
                    style={{ padding: "0 10px" }}
                  ></i>
                  <span style={{ padding: "0 2px" }}>{area}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default singleProperty
