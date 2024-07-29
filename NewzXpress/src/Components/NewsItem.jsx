import React from 'react';
import image from '../assets/Defaultimg.jpg'
const NewsItem = ({ title = '', description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:image} style={{ height: "245px", width: "328px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News based on latest updates"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
