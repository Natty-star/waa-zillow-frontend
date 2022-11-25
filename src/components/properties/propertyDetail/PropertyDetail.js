import { Divider, ImageList, ImageListItem } from "@mui/material";
import axios from "axios";
import { React, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "./propertyDetail.css";
export default function PropertyDetail() {
  const param = useParams();
  const [property, setProperty] = useState({});

  const fetchProduct = () => {
    axios
      .get("http://localhost:8084/api/v1/property/" + param.id)

      .then((response) => {
        console.log(response.data);
        setProperty(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {property !== null ? (
        <div className="detail">
          <div className="left-detail">
            <ImageList
              sx={{ width: 1000, height: 1000 }}
              cols={2}
              rowHeight={164}
            >
              {property.images.map((item) => (
                <ImageListItem key={item} className="imageItem">
                  <img className="image" src={item} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          <div className="center">
            <div className="right-detail">
              <div>
                <div>
                  <h4>
                    Title : <strong>{property.title}</strong>{" "}
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Home Type : <strong>{property.homeType}</strong>
                  </h4>
                </div>

                <Divider />

                <div>
                  <h4>
                    Bedrooms : <strong>{property.bedrooms}</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Bathrooms : <strong>{property.bathrooms}</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Price : <strong>{property.price}</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Area : <strong>{property.area} sq ft</strong>
                  </h4>
                </div>
                <Divider />

                <div>
                  <h4>
                    Owner Email : <strong>{property.ownerEmail}</strong>
                  </h4>
                </div>
                {property.category == "RENT" ? (
                  <div>
                    <label for="first_name">Intial Date</label>
                    <input type="date" labe class="datepicker" />
                    <label for="first_name">Final Date</label>
                    <input type="date" labe class="datepicker" />

                    <button className="succcess btn-large">RENT</button>
                  </div>
                ) : (
                  <button className="succcess btn-large ">BUY</button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>there is not da</div>
      )}
    </div>
  );
}
