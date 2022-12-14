// 

import React, { useContext, useEffect } from "react";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";

import "../../styles/trainerProfilePage.css";
import { CalendarView } from "../component/calendar";
import { TrainerScheduler } from "../component/trainerSchedule";
import { Context } from "../store/appContext";

//testing code
const TrainerProfilePage = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getTrainerInfo(id);
  }, []);
  // }
  console.log("this should be true", sessionStorage.getItem("user_id") === id);
  console.log("this is the id", id);
  console.log("this is the store.user_id", sessionStorage.getItem("user_id"));
  // function TrainerProfilePage() {
  return (
    <div className="row py-8 px-4">
      <div className="col-xl-8 col-md-8 col-10 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div
            className="px-4 pt-0 pb-4"
            style={{ backgroundColor: "rgba(252, 60, 5", padding: "0px" }}
          >
            <div className="media align-items-end profile-header">
              <div className="profile mr-3">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-profile/teacher.jpg"
                  alt="..."
                  width="200"
                  className="mb-2 img-thumbnail profile"
                  id="profilepic"
                  style={{ borderRadius: "100%" }}
                />
              </div>
              <div className="media-body mb-5 text-white">
                <h4 className="mt-0 mb-0 name">
                  {store.trainer.firstname} {store.trainer.lastname}
                </h4>
                <p className="small mb-4" style={{ margin: "0px" }}>
                  {" "}
                  <i className="fa fa-map-marker mr-2 icon"></i>
                  <span className="location"> {store.trainer.zipcode}</span>
                </p>
              </div>
            </div>
          </div>

          <ul
            className="nav nav-pills mb-3"
            style={{ display: "flex", flexDirection: "row", gap: "10px" }}
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{
                  backgroundColor: "black",
                  fontFamily: "roboto",
                  color: "rgba(252, 60, 5",
                }}
              >
                About me
              </button>
            </li>
            {/* if statement */}
            {sessionStorage.getItem("user_id") == store.trainer.id ? (
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  style={{
                    backgroundColor: "black",
                    fontFamily: "roboto",
                    color: "rgba(252, 60, 5",
                  }}
                >
                  Availability
                </button>
              </li>
            ) : (
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  style={{
                    backgroundColor: "black",
                    fontFamily: "roboto",
                    color: "rgba(252, 60, 5",
                  }}
                >
                  Calendar
                </button>
              </li>
            )}
            
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact-me"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                style={{
                  backgroundColor: "black",
                  fontFamily: "roboto",
                  color: "rgba(252, 60, 5",
                }}
              >
                Contact me
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="panel">
                <div
                  className="panel-body bio-graph-info"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="row">
                    <div className="bio-row">
                      <p>
                        <span>First Name </span>: {store.trainer.firstname}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Last Name </span>: {store.trainer.lastname}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Location</span>: {store.trainer.zipcode}
                      </p>
                    </div>

                    <div className="bio-row">
                      <p>
                        <span>Occupation </span>: {store.trainer.trainertype}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Qualifications </span>: {store.trainer.experience}
                        , {store.trainer.education}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <CalendarView />
            </div>
            <div
              className="tab-pane fade scroll"
              id="pills-contact-me"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              style={{ height: "500px", overflowY: "auto" }}
            >
              <div class="form-main-container">
                <div class="form-wrapper">
                  <form class="form-content">
                    <div class="input-wrapper">
                      <label class="txt-style1">Name</label>
                      <input
                        class="input-style"
                        type="text"
                        name="name"
                        required
                      />
                      <span class="input-style-focus"></span>
                    </div>
                    <div class="input-wrapper">
                      <label class="txt-style1">Email Address</label>
                      <input
                        class="input-style"
                        type="email"
                        name="email"
                        required
                      />
                      <span class="input-style-focus"></span>
                    </div>
                    <div class="input-wrapper">
                      <label class="txt-style1">Subject</label>
                      <input
                        class="input-style"
                        type="text"
                        name="subject"
                        required
                      />
                      <span class="input-style-focus"></span>
                    </div>
                    <div class="input-wrapper">
                      <label class="txt-style1">Message</label>
                      <textarea
                        class="textarea-style"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                      <span class="textarea-style-focus"></span>
                    </div>
                    <div class="d-flex w-100">
                      <button class="button-style">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade scroll"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              style={{ height: "500px", overflowY: "auto" }}
            >
              <TrainerScheduler />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfilePage;
