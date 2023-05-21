import React, { useState } from 'react';

export function Square(props) {
  // const generalpath = "https://github.com/UW-INFO442-SP23/group-heart/tree/main/";

  // const image_path = generalpath + props.img_path;

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex-item-card">
      <button className="card-button" onClick={togglePopup}>
        <img src={props.img_path} alt={props.img_alt} />
        <div className="card-content">
          <h3 className="project-title">{props.title}</h3>
        </div>
      </button>
      {showPopup && (
        <div className="popup">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${props.video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
}