import React from "react";
import Image from "react-bootstrap/Image";

import "../../styles/trainerProfilePage.css";

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
                Experience
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
                Reviews
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
              .......
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="row text-center">
                <div className="col-md-12">
                  <div
                    id="carouselBasicExample"
                    className="carousel slide carousel-dark"
                    data-mdb-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <p className="lead font-italic mx-4 mx-md-5">
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Fugit, error amet numquam iure provident
                          voluptate esse quasi, voluptas nostrum quisquam!"
                        </p>
                        <div className="mt-5 mb-4">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                            className="rounded-circle img-fluid shadow-1-strong"
                            alt="smaple image"
                            width="100"
                            height="100"
                          />
                        </div>
                        <p className="text-muted mb-0">- Anna Morian</p>
                      </div>

                      <div className="carousel-item">
                        <p className="lead font-italic mx-4 mx-md-5">
                          "Neque cupiditate assumenda in maiores repudiandae
                          mollitia adipisci maiores repudiandae mollitia
                          consectetur adipisicing architecto elit sed adipiscing
                          elit."
                        </p>
                        <div className="mt-5 mb-4">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                            className="rounded-circle img-fluid shadow-1-strong"
                            alt="smaple image"
                            width="100"
                            height="100"
                          />
                        </div>
                        <p className="text-muted mb-0">- Teresa May</p>
                      </div>

                      <div className="carousel-item">
                        <p className="lead font-italic mx-4 mx-md-5">
                          "Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur est
                          laborum neque cupiditate assumenda in maiores."
                        </p>
                        <div className="mt-5 mb-4">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                            className="rounded-circle img-fluid shadow-1-strong"
                            alt="smaple image"
                            width="100"
                            height="100"
                          />
                        </div>
                        <p className="text-muted mb-0">- Kate Allise</p>
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-mdb-target="#carouselBasicExample"
                      data-mdb-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-mdb-target="#carouselBasicExample"
                      data-mdb-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerProfilePage;
