import React from "react";

function FeedbackMessage(props) {
  return (
    <>
      <tr>
        <td>{props.count}</td>
        <td>{props.data.name}</td>
        <td>{props.data.email}</td>
        <td>{props.data.food}</td>
        <td>{props.data.drink}</td>
        <td>{props.data.service}</td>
        <td>{props.data.menu}</td>
        <td>{props.data.atmosphere}</td>
        <td>{props.data.cleanliness}</td>
        <td>{props.data.suggestion}</td>
      </tr>
    </>
  );
}

export default FeedbackMessage;
