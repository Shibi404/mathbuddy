import React from "react";
import "../styles/video.css";

export default function Video() {
  const videos = [
    "https://www.youtube.com/embed/igcoDFokKzU",
    "https://www.youtube.com/embed/8cR_1Qi-tP4",
    "https://www.youtube.com/embed/rqiu_xcvSk4",
    "https://www.youtube.com/embed/G0Di8DP9f8w",
    "https://www.youtube.com/embed/gf97tXwTDe0"
  ];

  return (
    <div className="video-page">
      <h1>🎥 Math Learning Videos</h1>
      <div className="video-container">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <iframe
              width="400"
              height="225"
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
