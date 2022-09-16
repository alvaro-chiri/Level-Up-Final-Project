import React from "react";
import Image from "react-bootstrap/Image";

import "../../styles/trainerProfilePage.css";
import { CalendarView } from "../component/calendar";
import { TrainerScheduler } from "../component/trainerSchedule";

function TrainerProfilePage() {
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
                  className="rounded mb-2 img-thumbnail profile"
                  style={{ borderRadius: "100%" }}
                />
              </div>
              <div className="media-body mb-5 text-white">
                <h4 className="mt-0 mb-0 name">John Doe</h4>
                <p className="small mb-4" style={{ margin: "0px" }}>
                  {" "}
                  <i className="fa fa-map-marker mr-2 icon"></i>
                  <span className="location">Fort Lauderdale, FL.</span>
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
                style={{ backgroundColor: "black", fontFamily: "roboto" }}
              >
                About me
              </button>
            </li>
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
                style={{ backgroundColor: "black", fontFamily: "roboto" }}
              >
                Calendar
              </button>
            </li>
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
                style={{ backgroundColor: "black", fontFamily: "roboto" }}
              >
                Availiability
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
              <div class="panel">
                <div
                  class="panel-body bio-graph-info"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div class="row">
                    <div class="bio-row">
                      <p>
                        <span>First Name </span>: John
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>Last Name </span>: Doe
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>City</span>: Fort Lauderdale
                      </p>
                    </div>

                    <div class="bio-row">
                      <p>
                        <span>Occupation </span>: Personal Trainer
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>Qualifications </span>: 14 Years experience,
                        Nutrition.
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>Social Media </span>: IG: Johndoe123
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
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CalendarView />
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <TrainerScheduler />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerProfilePage;
