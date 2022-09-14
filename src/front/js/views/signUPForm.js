import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signupform.css";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [trainerType, setTrainerType] = useState("0");
  const navigate = useNavigate();
  const { store, actions } = useContext(Context); 

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${process.env.BACKEND_URL}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        zipcode: zipCode,
        trainertype: trainerType,
      }),
    });
    const payload = await response.json();
    actions.setID(response.json())
    return payload.result, navigate("/traineraboutme");
  }

  return (
    <>
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Registration Info</h2>
              <form>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Last Name"
                    name="Lastname"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Zip code"
                    name="zip code"
                    value={zipCode}
                    onChange={(e) => {
                      setZipCode(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Trainer Type</label>
                  <select
                    className="form-select"
                    value={trainerType}
                    onChange={(e) => {
                      setTrainerType(e.target.value);
                    }}
                  >
                    <option value="0">Choose...</option>
                    <option value="Personal Trainer">Personal Trainer</option>

                    <option value="Golf Instructor">Golf Instructor</option>
                    <option value="Tennis Instructor">Tennis Instructor</option>
                    <option value="Yoga Instructor">Yoga Instructor</option>
                  </select>
                </div>

                <div className="p-t-10">
                    <button
                      onClick={(e) => {
                        onSubmit(e);
                      }}
                      className="button-01"
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
