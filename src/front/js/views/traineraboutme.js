import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signupform.css";
import { useNavigate } from "react-router-dom";

export const TrainersProfileInfo = () => {
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();
  const { store, actions } = useContext(Context); 

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${process.env.BACKEND_URL}/api/user/${store.user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age,
        education: education,
        experience: experience,
        aboutme: aboutMe,
      }),
    });
    const payload = await response.json();
    return payload.result, navigate("/trainerprofile");
  }

  return (
    <>
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3 trainer">
            <div className="card-heading-about"></div>
            <div className="card-body">
              <h2 className="title">Tell us about you</h2>
              <form>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="How old are you?"
                    name="howoldareyou"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="Education"
                    name="education"
                    value={education}
                    onChange={(e) => {
                      setEducation(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Experience</label>
                  <select
                    className="form-select"
                    value={experience}
                    onChange={(e) => {
                      setExperience(e.target.value);
                    }}
                  >
                    <option value="0">Choose...</option>
                    <option value="0-1 years">0-1 years</option>

                    <option value="2-3 years">2-3 years</option>
                    <option value="4-5 years">4-5 years</option>
                    <option value="6+ years">6+ years</option>
                  </select>
                </div>

                <div className="input-group">
                  <span className="input-group-text"></span>
                  <textarea
                    className="form-control"
                    placeholder="Tell us about you in a few words..."
                    aria-label="With textarea"
                    value={aboutMe}
                    onChange={(e) => {
                      setAboutMe(e.target.value);
                    }}
                  ></textarea>
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
