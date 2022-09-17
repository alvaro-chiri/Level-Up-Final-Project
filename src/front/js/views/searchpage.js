import React, { useState } from "react";
import "../../styles/searchpage.css";

export const SearchPage = () => {
  const [zipcode, setZipcode] = useState("");
  const [distance, setDistance] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    fetch (`https://app.zipcodebase.com/api/v1/radius?apikey=fd0a6080-368b-11ed-bbdb-c1eae6e869ff&code=${zipcode}&radius=${distance}&country=us`).then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  }
  
  return (
    <div className="row searchform">
      <form action="/search" method="GET" id="search">
        <div className="col">
          <label htmlFor="inputZipCode" className="form-label">
            Zip Code
          </label>
          <input
            type="number"
            className="form-control"
            id="inputZipCode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="inputRange" className="form-label">
            Range in Miles
          </label>
          <input
            type="number"
            className="form-control"
            id="inputRange"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => formSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};
