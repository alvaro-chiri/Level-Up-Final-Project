import { useState } from "react";
import Calendar from "react-calendar";
import "/workspace/Level-Up-Final-Project/src/front/styles/trainerSchedule.css";
import React from "react";

const timesAm = [
  "05:00am",
  "05:30am",
  "06:00am",
  "06:30am",
  "07:00am",
  "07:30am",
  "08:00am",
  "08:30am",
  "09:00am",
  "09:30am",
  "10:00am",
  "10:30am",
  "11:00am",
  "11:30am",
  "12:00am",
];
const timesPm = [
  "05:00pm",
  "05:30pm",
  "06:00pm",
  "06:30pm",
  "07:00pm",
  "07:30pm",
  "08:00pm",
  "08:30pm",
  "09:00pm",
  "09:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
  "11:30pm",
  "12:00pm",
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const TrainerScheduler = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="container">
      <div class="container text-center">
        <div class="col-8">
          <div class="col">
            {" "}
            <h1>Days</h1>{" "}
          </div>
          <div class="col">
            {" "}
            {weekDays.map((days) => (
              <button className="button">{days}</button>
            ))}
          </div>
          <div class="col">
            <div class="container text-center">
              <div class="row">
                <div class="col-6">
                  <h1>AM Times</h1>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    {timesAm.map((time) => (
                      <button className="button">{time}</button>
                    ))}
                  </div>
                </div>
                <div class="col-6">
                  <h1>PM Times</h1>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    {timesPm.map((time) => (
                      <button className="button">{time}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2px",
        }}
      ></div>
    </div>
  );
};
