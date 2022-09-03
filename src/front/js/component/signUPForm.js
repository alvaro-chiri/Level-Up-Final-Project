import React, { useState } from "react";
import "../../styles/signupform.css";

export const SignUpForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [trainerType, setTrainerType] = useState("0");

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${process.env.BACKEND_URL}/api/user`, {
      method: "POST",
      body: {
        firstname: { firstname },
        lastname: { lastname },
        email: { email },
        password: { password },
        zipcode: { zipCode },
        trainertype: { trainerType },
      },
    });
    const payload = await response.json();
    return payload.results;
  }

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
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Last Name"
                    name="Lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Zip code"
                    name="zip code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
                <div class="input-group">
                  <label class="input-group-text">Trainer Type</label>
                  <select
                    class="form-select"
                    value={trainerType}
                    onChange={(e) => setTrainerType(e.target.value)}
                  >
                    <option value="0">Choose...</option>
                    <option value="1">Personal Trainer</option>

                    <option value="2">Golf Instructor</option>
                    <option value="3">Tennis Instructor</option>
                    <option value="3">Yoga Instructor</option>
                  </select>
                </div>

                <div class="p-t-10">
                  <button
                    onChange={(e) => onSubmit(e)}
                    class="button-01"
                    type="submit"
                  >
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
