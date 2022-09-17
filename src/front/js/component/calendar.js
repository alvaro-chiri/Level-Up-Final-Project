import React, { useState } from "react";
import Calendar from "react-calendar";
import "/workspace/Level-Up-Final-Project/src/front/styles/calendar.css";

export const CalendarView = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
