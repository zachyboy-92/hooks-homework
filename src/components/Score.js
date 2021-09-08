import "./Score.css";

export default function Score(props) {
  const scoreData = props.score;
  console.log(scoreData);
  return (
    <ul className="score-container">
      <li>Date: {props.score.date}</li>
      <li>Score: {props.score.score}</li>
    </ul>
  );
}
