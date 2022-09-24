import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "/workspace/Level-Up-Final-Project/src/front/styles/trainerSchedule.css";
import React from "react";

const timesAm = [
  "04:00am",
  "04:30am",
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
  "12:00pm",
  "12:30pm",
  "01:00pm",
  "01:30pm",
  "02:00pm",
  "02:30pm",
  "03:00pm",
  "03:30pm",
  "04:00pm",
  "04:30pm",
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
];

const weekDays = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

export const TrainerScheduler = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.BACKEND_URL}/api/user/1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.daysavailable) {
          //this is the column name has to verbatim.
          setSelectedDays(data.daysavailable.split(","));
        }
        if (data.timesavailable) {
          setSelectedTimes(data.timesavailable.split(","));
        }
      });
  }, []);

  const saveAvailability = () => {
    fetch(
      `${process.env.BACKEND_URL}/api/user/1/availability`,
      {
        method: "POST",
        body: JSON.stringify({
          daysavailable: selectedDays.join(","),
          timesavailable: selectedTimes.join(","),
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
  };

  const existsInArray = (value, values) => {
    return values.includes(value);
  };

  const toggleSelectedDays = (day) => {
    const daysSelected = [...selectedDays]; //makes copy of array
    if (existsInArray(day, selectedDays)) {
      const index = selectedDays.indexOf(day); //gives us index of the item
      daysSelected.splice(index, 1); //removes that item from the array
    } else {
      daysSelected.push(day); // if it didnt exisists, this adds it to the array
    }
    setSelectedDays(daysSelected); // setting the state to the new array we created above
  };

  const toggleSelectedTimes = (time) => {
    const timesSelected = [...selectedTimes];
    if (existsInArray(time, selectedTimes)) {
      const index = selectedTimes.indexOf(time);
      timesSelected.splice(index, 1);
    } else {
      timesSelected.push(time);
    }
    setSelectedTimes(timesSelected);
  };

  return (
    <div className="container">
      <div className="container text-center">
        <div className="col-7">
          <div className="col">
            <h1>Days</h1>
          </div>
          <div
            className="col-12"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {weekDays.map((days) => (
              <button
                key={days}
                onClick={() => toggleSelectedDays(days)}
                className="button"
                style={{
                  backgroundColor: existsInArray(days, selectedDays)
                    ? "red"
                    : "",
                }}
              >
                {days}
              </button>
            ))}
          </div>
          <div className="col">
            <div className="container text-center">
              <div className="row">
                <div className="col-6">
                  <h1>AM Times</h1>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    {timesAm.map((time) => (
                      <button
                        key={time}
                        onClick={() => toggleSelectedTimes(time)}
                        className="button"
                        style={{
                          backgroundColor: existsInArray(time, selectedTimes)
                            ? "red"
                            : "",
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="col-6">
                  <h1>PM Times</h1>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    {timesPm.map((time) => (
                      <button
                        key={time}
                        onClick={() => toggleSelectedTimes(time)}
                        className="button"
                        style={{
                          backgroundColor: existsInArray(time, selectedTimes)
                            ? "red"
                            : "",
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={saveAvailability}> Submit </button>
    </div>
  );
};
