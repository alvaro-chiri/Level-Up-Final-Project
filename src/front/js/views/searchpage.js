import React, {useState} from "react";
import "../../styles/searchpage.css";
// import ReactMapGL from "react-map-gl"

function SearchPage() {
  const [viewport, setViewport] = useState ({
    latitude: -90,
    longitude: -180,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  }

  )
  return (
    <div class="container emp-profile">
      <form method="post">
        <div class="row align-items-start">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://images.pexels.com/photos/3621168/pexels-photo-3621168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
            <div class="input-group rounded">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search Address"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <br/>
            <div>
              <select class="form-select" aria-label="Default select example">
                <option selected>Instructor Type</option>
                <option value="1">Strength Training</option>
                <option value="2">Aerobic Training</option>
                <option value="3">Balance and Stability</option>
                <option value="4">Coordination and Agility</option>
              </select>
              
              </div>
              
          </div>
          
          <div class="col-md-6 d-flex flex-column align-items-start">
            <div class="profile-head">
              <h5>Brittany Green</h5>
              <h6>Software Engineer And Developer</h6>
              <h6>brittanygreen@gmail.com</h6>
              <p class="proile-rating">
                FITNESS GOAL : <span>Weight Loss</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                           </ul>
            </div>
            {/* <div class="container-fluid"> */}
            <div class="map-responsive">
              {/* <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width="659"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen
              ></iframe> */}
              {/* <ReactMapGL {...viewport}>

              </ReactMapGL> */}
            </div>
            
          </div>
          
</div>
       
      </form>
    </div>
  );
}

export default SearchPage;