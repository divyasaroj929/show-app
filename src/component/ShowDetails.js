import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log("Error fetching show details: ", error));
  }, [id]);

  const bookTicket = () => {
    alert(`Booking ticket for ${show.name}`);
  };

  return (
    <div className="details-page groups-card">
      <h1>Show Details</h1>
      <div className="card-details">
        {show && (
          <div className="card-details">
            <h2>{show.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
            <button onClick={bookTicket}>Book Ticket</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDetail;
