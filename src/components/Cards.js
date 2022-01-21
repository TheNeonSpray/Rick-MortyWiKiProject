import React from "react";

const Cards = ({ results }) => {
  let display;
  if (results) {
    //iterate through the variable results and render the data
    display = results.map((i) => {
      let { id, name, image, location } = i;
      return (
        <div key={id} className="col-4 d-grid gap-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Last Location: {location.name}</p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = `Hey! Are you sure that's a character from the show?`;
  }

  return <>{display}</>;
};

export default Cards;
