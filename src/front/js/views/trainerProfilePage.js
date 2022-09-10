import React from "react";
import Image from "react-bootstrap/Image";

import "../../styles/trainerProfilePage.css";

function TrainerProfilePage() {
  return (
    <div class="row py-8 px-4">
      <div class="col-xl-8 col-md-8 col-10 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div
            class="px-4 pt-0 pb-4"
            style={{ backgroundColor: "rgba(252, 60, 5" }}
          >
            <div class="media align-items-end profile-header">
              <div class="profile mr-3">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-profile/teacher.jpg"
                  alt="..."
                  width="200"
                  class="rounded mb-2 img-thumbnail"
                />
              </div>
              <div class="media-body mb-5 text-white">
                <h4 class="mt-0 mb-0">John Doe</h4>
                <p class="small mb-4">
                  {" "}
                  <i class="fa fa-map-marker mr-2"></i>Fort Lauderdale, FL.
                </p>
              </div>
            </div>
          </div>

          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                About me
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Experience
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerProfilePage;
