import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container gallery">
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">Gallery</h1>
      <hr className="w-50 m-auto mb-5" />
      <div className="row">
        <div className="col-md-4 col-sm-12 px-0">
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/68840p2/Bandarban-Tour-Package-1.jpg"
              alt=""
            />
          </div>
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/FsFbFfy/Keokradong-Tour-Package-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12 px-0">
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/PNQFxt2/Nafakhum-Tour-Package-1.jpg"
              alt=""
            />
          </div>
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/7zfR9mc/Saint-Martin-Tour-Package-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12 px-0">
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/6nYdcrK/Sajek-Valley-Tour-Package-1.jpg"
              alt=""
            />
          </div>
          <div className="gallery-img">
            <img
              className="img-fluid"
              src="https://i.ibb.co/YNKDhNm/Sundarban-Tour-Package-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// https://i.ibb.co/68840p2/Bandarban-Tour-Package-1.jpg
// https://i.ibb.co/FsFbFfy/Keokradong-Tour-Package-1.jpg
// https://i.ibb.co/PNQFxt2/Nafakhum-Tour-Package-1.jpg
// https://i.ibb.co/7zfR9mc/Saint-Martin-Tour-Package-1.jpg
// https://i.ibb.co/6nYdcrK/Sajek-Valley-Tour-Package-1.jpg
// https://i.ibb.co/YNKDhNm/Sundarban-Tour-Package-1.jpg
// https://i.ibb.co/VQyNwfh/Tanguar-Haor-Tour-Package-1.jpg
