import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const generateCard = (robot) => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  );
  return robots.map(generateCard);
};

export default CardList;
