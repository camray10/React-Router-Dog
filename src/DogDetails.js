import React from "react";
import { useParams, Link } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  return (
    <div className="DogDetails">
      {dog && (
        <div>
          <h2>{dog.name}</h2>
          <Link to={`/dogs/${dog.name}`}>
            <img src={dog.src} alt={dog.name} />
          </Link>
          <p>Age: {dog.age}</p>
          <p>Facts:</p>
          <ul>
            {dog.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DogDetails;
