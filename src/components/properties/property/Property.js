import React from "react";
import "./property.css";

export default function Property(props) {
  const property = props.property;
  return (
    <>
      <div class="card ">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            class="activator"
            src="https://property-managment.s3.amazonaws.com/1669101047837_png"
          />
        </div>

        <div className="card-content ">
          <div className="left">
            <h6>$ {property.price}</h6>
          </div>
          {property.category == "BUY" ? (
            <div className="right">
              <a  class="waves-effect waves-light btn right">BUY</a>
            </div>
          ) : (
            <div className="right">
              <a class="waves-effect waves-light btn right">RENT</a>
            </div>
          )}
        </div>
        <br />
        <div className="divider"></div>

        <div className="card-action">
          <p className="tail waves-effect waves-light">
            <i class="material-icons left">straighten</i> 1200 sq ft
          </p>

          <p className=" tail waves-effect waves-light">
            <i class="material-icons left">bed</i>{property.bedrooms}
          </p>
          <p className="tail waves-effect waves-light">
            <i className="material-icons left">shower</i>12
          </p>
        </div>
      </div>
    </>
  );
}
