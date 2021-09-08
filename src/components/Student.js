import React from "react";
import Score from "./Score";
import "./Student.css";

function Student(props) {
  return (
    <div className="student-container">
      <h3>Name: {props.data.name}</h3>
      <p>Bio: {props.data.bio}</p>
      {props.data.scores.map((scores, index) => (
        <Score score={scores} key={index} />
      ))}
    </div>
  );
}
export default Student;
