import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lists = ({ handleAddfavorites }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10"
      )
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      });
  }, []);

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <h3>Image Gallery</h3>
      <button className="backbtn" onClick={handleClick}>
        <span>Back</span>
      </button>
      <div className="images">
        {images?.map((image) => (
          <div className="image-card">
            <div key={image.id}>
              <img className="images_list" src={image.url} alt={image.title} />
            </div>
            <div>
              <h3 className="image_id">{image.id}</h3>
            </div>
            <div className="image-title">
              <h3>{image.title}</h3>
            </div>
            <div>
              <button
                className="images_btn"
                onClick={() => handleAddfavorites(image)}>
                Add to favourites
              </button>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lists;
