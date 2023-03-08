import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <h1>Pick a dog!</h1>
      {dogs.map((dog) => (
        <div key={dog.name} className="DogListDog">
          <h2>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </h2>
          <img src={dog.src} alt={dog.name} />
        </div>
      ))}
    </div>
  );
};

export default DogList;
