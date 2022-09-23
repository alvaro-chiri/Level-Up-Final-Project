import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/searchpage.css";
import { Button } from "react-bootstrap"

export const SearchPage = () => {
  const [zipcode, setZipcode] = useState("");
  const [distance, setDistance] = useState("");
  const [nearbyZipcodes, setNearbyZipcodes] = useState(null);
  const [trainers, setTrainers] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (nearbyZipcodes != null && trainers != null) {
      const filteredTrainers = trainers.filter((trainer) => {
        let match = false;
        nearbyZipcodes.forEach((nearbyZipcode) => {
          console.log("nearby zip and trainer", nearbyZipcode, trainer);
          if (nearbyZipcode.code === trainer.zipcode) {
            match = true;
          }
          console.log("match", match);
        });
        return match;
      });
      console.log("filtered trainers", filteredTrainers);
      const trainerResults = filteredTrainers.map((filteredTrainer) => {
        nearbyZipcodes.forEach((nearbyZipcode) => {
          if (nearbyZipcode.code === filteredTrainer.zipcode) {
            filteredTrainer.distance = nearbyZipcode.distance;
          }
        });
        return filteredTrainer;
      });
      console.log("trainer results", trainerResults);
      setSearchResults(trainerResults);
    }
  }, [nearbyZipcodes, trainers]);

  const formSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://app.zipcodebase.com/api/v1/radius?apikey=fd0a6080-368b-11ed-bbdb-c1eae6e869ff&code=${zipcode}&radius=${distance}&country=us`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setNearbyZipcodes(data.results);
      });
    fetch(`${process.env.BACKEND_URL}/api/user`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setTrainers(data);
      });
  };

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
      <ul>
        <li>
          {searchResults &&
            searchResults.map((trainer) => {
              return (
                <div>
                  <h3>
                    {trainer.firstname} {trainer.lastname}
                  </h3>
                  <h4> Distance: {trainer.distance}</h4>
                  <Link to={"/trainerprofile/" + trainer.id}>
                    <Button variant="primary">Go to Profile</Button>
                  </Link>
                </div>
              );
            })}
        </li>
      </ul>
    </div>
  );
};
