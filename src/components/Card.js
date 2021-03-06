import React from "react";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <div className="tc bg-light-green dib br3 bw2 shadow-5 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
