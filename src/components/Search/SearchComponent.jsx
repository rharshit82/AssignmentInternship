import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./SearchComponent.css"
import { useDispatch } from 'react-redux'
import { search } from '../../store/actions/action'
const SearchComponent = () => {
  const history = useHistory();
  const [location, setLocation] = useState("Delhi");
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState("<0-1000");
  const [type, setType] = useState("Houses");
  const handleSearch = (e) => {
    e.preventDefault();
    
      dispatch(
        search({
          item: {
            location,
            date,
            price,
            type,
          }
        }))

      history.push("/search");
  }

  return (
    <>
      <section className="SearchComponent">
        <div className="container">
          <h1>Search properties to rent</h1>
          <form className="flex">
            <div className="box">
              <span>Location</span>
              <select
                type="text"
                required
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              >
                 <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Chennai">Chennai</option>
                </select>
            </div>
            <div className="box">
              <span>When To Move</span>
              <input
                type="date"
                required
                onChange={(e) => setDate(e.target.value)}
                placeholder="Property Type"
              />
            </div>
            <div className="box">
              <span>Price</span>

              <select
                id="price-range"
                onChange={(e) => setPrice(e.target.value)}
                required
                name="Price"
              >
                <option value="<0-500">500 and Below $ </option>
                <option value="500-1000">500 $ - 1000 $</option>
                <option value="1000-5000">1000 $ - 5000 $</option>
                <option value="5000-10000">5000 $ - 10000 $</option>
                <option value="10000-20000">10000 $ - 20000 $ </option>
              </select>
            </div>
            <div className="box">
              <span>Property Type</span>

              <select
                id="property-type"
                required
                onChange={(e) => setType(e.target.value)}
                name="Property Type"
              >
                <option value="Houses">Houses</option>
                <option value="Flats">Flats</option>
                <option value="Rooms">Rooms</option>
                <option value="Offices">Offices</option>
                <option value="Apartment">Apartment</option>
                <option value="Hotel">Hotel</option>
              </select>
            </div>

            <button onClick={handleSearch} className="btn">
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default SearchComponent
