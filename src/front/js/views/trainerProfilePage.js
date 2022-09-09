import React from "react";
import Image from "react-bootstrap/Image";

import "../../styles/trainerProfilePage.css";

function TrainerProfilePage() {
  return (
    <div class="row py-8 px-4">
      <div class="col-xl-8 col-md-8 col-10 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 bg-dark">
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

          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent photos</h5>
              <a href="#" class="btn btn-link text-muted">
                Show all
              </a>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 mb-2 pl-lg-1">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 pr-lg-1 mb-2">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
              <div class="col-lg-6 pl-lg-1">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg"
                  alt=""
                  class="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerProfilePage;
