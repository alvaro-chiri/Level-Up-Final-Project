import React from "react";
import Image from "react-bootstrap/Image";

import "../../styles/trainerProfilePage.css";

function TrainerProfilePage() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-4">
          <div className="row">
            <Image
              className="img-fluid pfpTrainer"
              src="https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg"
            />
          </div>
          <div className="row interact-buttons">
            <div className="col">
              <button className="btn btn-danger">Message</button>
            </div>
            <div className="col">
              <button className="btn btn-danger">Make an Appointment</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="fs-1 text-center text-decoration-underline">
              Alvaro Chirinos
            </div>
          </div>
          <div className="row">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="about-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#about"
                  type="button"
                  role="tab"
                  aria-controls="about"
                  aria-selected="true"
                >
                  About this Trainer
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="socials-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#socials"
                  type="button"
                  role="tab"
                  aria-controls="socials"
                  aria-selected="true"
                >
                  Socials
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="schedule-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#schedule"
                  type="button"
                  role="tab"
                  aria-controls="schedule"
                  aria-selected="true"
                >
                  Schedule
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="reviews-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews"
                  type="button"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected="true"
                >
                  Reviews
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque finibus vel dui eget tristique. Cras luctus sapien nec
                  luctus laoreet. In metus sapien, dapibus quis ornare at,
                  elementum vel magna. Proin mattis, magna sed hendrerit
                  feugiat, odio velit mattis augue, quis pulvinar risus tellus
                  quis dolor. Interdum et malesuada fames.
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="socials"
                role="tabpanel"
                aria-labelledby="socials-tab"
              >
                <ul>
                  <div className="fs-4">
                    <a
                      className="social-links"
                      href="https://www.instagram.com/"
                    >
                      <i class="fab fa-instagram" />
                    </a>{" "}
                    Alvarochiri
                  </div>
                  <div className="fs-4">
                    <a className="social-links" href="https://www.youtube.com/">
                      <i class="fab fa-youtube" />
                    </a>{" "}
                     youtube.com/Alvaro
                  </div>
                  <div className="fs-4">
                    <a className="social-links" href="https://www.twitch.tv/">
                      <i class="fab fa-twitch" />
                    </a>{" "}
                    twitch.tv/alvaroch
                  </div>
                  <div className="fs-4">
                    <a className="social-links" href="https://www.twitter.com/">
                      <i class="fab fa-twitter" />
                    </a>{" "}
                    twitter.com/alvaroch
                  </div>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="schedule"
                role="tabpanel"
                aria-labelledby="schedule-tab"
              >
                <table>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Type of service</th>
              <th>Message Button</th>
            </tr>
            <tr>
              <td>9/30</td>
              <td>7:00 PM</td>
              <td>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Alvaro Chirinos
                </a>
              </td>
              <td>Soccer Training</td>
              <td>
                <button className="btn btn-outline-danger">Message</button>
              </td>
            </tr>
            <tr>
              <td>10/1</td>
              <td>10:00 AM</td>
              <td>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Nahuel Piecora
                </a>
              </td>
              <td>Yoga</td>
              <td>
                <button className="btn btn-outline-danger">Message</button>
              </td>
            </tr>
            <tr>
              <td>10/2</td>
              <td>9:00 AM</td>
              <td>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Terry Welch
                </a>
              </td>
              <td>Strength Training</td>
              <td>
                <button className="btn btn-outline-danger">Message</button>
              </td>
            </tr>
            <tr>
              <td>10/7</td>
              <td>7:00 PM</td>
              <td>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Alvaro Chirinos
                </a>
              </td>
              <td>Soccer Training</td>
              <td>
                <button className="btn btn-outline-danger">Message</button>
              </td>
            </tr>
            <tr>
              <td>10/8</td>
              <td>9:00 AM</td>
              <td>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Nahuel Piecora
                </a>
              </td>
              <td>Strength Training</td>
              <td>
                <button className="btn btn-outline-danger">Message</button>
              </td>
            </tr>
          </table>
              </div>
              <div
                className="tab-pane fade"
                id="reviews"
                role="tabpanel"
                aria-labelledby="reviews-tab"
              >
                <div className="fs-1">Reviews: ⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerProfilePage;
