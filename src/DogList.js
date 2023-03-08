import React from "react";
import { useHistory } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
  const history = useHistory();

  const handleClick = (name) => {
    history.push(`/dogs/${name}`);
  };

  return (
    <div className="DogList">
      <h1>{"Pick a dog!"}</h1>
      {dogs.map((dog) => (
        <div className="DogListDog" onClick={() => handleClick(dog.name)}>
          <h2>{dog.name}</h2> <img src={dog.src} alt={dog.name} />{" "}
        </div>
      ))}
    </div>
  );
};

export default DogList;





