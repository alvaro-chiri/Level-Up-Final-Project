import React from "react";
import "../../styles/signupform.css";

export const SignUpForm = () => {
  return (
    <>
      <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
          <div class="card card-3">
            <div class="card-heading"></div>
            <div class="card-body">
              <h2 class="title">Registration Info</h2>
              <form method="POST">
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Last Name"
                    name="Lastname"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Password"
                    name="password"
                  />
                </div>

                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Zip code"
                    name="zip code"
                  />
                </div>
                <div class="input-group">
                  <label class="input-group-text">
                    Trainer Type
                  </label>
                  <select class="form-select" >
                    <option selected>Choose...</option>
                    <option value="1">Personal Trainer</option>
                    <option value="2">Golf Instructor</option>
                    <option value="3">Tennis Instructor</option>
                    <option value="3">Yoga Instructor</option>
                  </select>
                </div>

                <div class="p-t-10">
                  <button class="button-01" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
