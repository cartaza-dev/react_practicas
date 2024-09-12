import { Fragment } from "react";

function Card() {
  const width = {
    width: "350px",
  };

  return (
    <div className="card" style={width}>
      <div className="card-header">Featured</div>
      <div className="card-body">
        <CardBody></CardBody>
      </div>
    </div>
  );
}

export function CardBody() {
  return (
    <Fragment>
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </Fragment>
  );
}

export default Card;
