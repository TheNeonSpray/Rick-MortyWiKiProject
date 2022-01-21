import React from "react";

const Cards = ({ results }) => {
  let display;
  if (results) {
    //iterate through the variable results and render the data
    display = results.map((i) => {
      let { id, name, image, location, status } = i;
      return (
        <div key={id} className="col-4 d-grid gap-3 position-relative">
          <div className="card m-3 shadow-sm" style={{ width: "12rem" }}>
            <img src={image} className="card-img-top image-fluid" alt="" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Last Location: {location.name}</p>
            </div>
            {(() => {
              if (status === "Dead") {
                return (
                  <div className="col">
                    <div className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1">
                      {status}
                    </div>
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="col">
                    <div className="position-absolute top-0 end-0 badge rounded-pill bg-info m-1">
                      {status}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col">
                    <div className="position-absolute top-0 end-0 badge rounded-pill bg-dark m-1">
                      {status}
                    </div>
                  </div>
                );
              }
            })()}
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
