import React from "react";
import "../../styles/signupform.css";

export const LoginForm = () => {
  return (
    <>
      <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
          <div class="card card-3">
            <div class="card-heading-login"></div>
            <div class="card-body">
              <h2 class="title">Login</h2>
              <form method="POST">
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
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
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
