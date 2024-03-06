import React from "react";
import { useNavigate } from "react-router-dom"; // To route to list page

const Dashboard = ({ imageItems }) => {
  const navigate = useNavigate();
  console.log(imageItems);
  const handleClick = () => {
    navigate("/list");
  };
  return (
    <>
      <h3>Dashboard</h3>
      <button className="button" onClick={handleClick}>
        <span>Go To List Page</span>
      </button>
      <div className="images">
        {/* <div className="image-title"> Favourites Image List</div> */}
        {imageItems.length === 0 && (
          <div className="image-lists-empty"> No lists of favourits images</div>
        )}
        <div>
          {imageItems?.map((image) => (
            <div key={image.id} className="image-card">
              <img
                className="images_list"
                src={image.url}
                alt={image.thumbnailUrl}
              />
              <div className="image_id">{image.id}</div>
              <div>
                <h2 className="image-title">{image.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
