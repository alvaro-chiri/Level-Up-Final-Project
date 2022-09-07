import React, { useState } from "react";
import "../../styles/signupform.css";

export const TrainersProfileInfo = () => {
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [experience, setExperience] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${process.env.BACKEND_URL}/api/user`, {
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
    return payload.result;
  }

  return (
    <>
      <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
          <div class="card card-3 trainer">
            <div class="card-heading-about"></div>
            <div class="card-body">
              <h2 class="title">Tell us about you</h2>
              <form>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="How old are you?"
                    name="howoldareyou"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <div class="input-group">
                  <input
                    class="input--style-3"
                    type="text"
                    placeholder="Education"
                    name="education"
                    value={education}
                    onChange={(e) => {
                      setEducation(e.target.value);
                    }}
                  />
                </div>
                <div class="input-group">
                  <label class="input-group-text">Experience</label>
                  <select
                    class="form-select"
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

                <div class="input-group">
                  <span class="input-group-text"></span>
                  <textarea
                    class="form-control"
                    placeholder="Tell us about you in a few words..."
                    aria-label="With textarea"
                    value={aboutMe}
                    onChange={(e) => {
                      setAboutMe(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div class="p-t-10">
                  <button
                    onClick={(e) => {
                      onSubmit(e);
                    }}
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
