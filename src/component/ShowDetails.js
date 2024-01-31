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
  const saveUserDetails = () => {
    const userDetails = {
      showId: id,
      showName: show.name,
      // Add more user details if needed
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    // Or sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    alert("User details saved!");
  };

  return (
    <div className="details-page groups-card">
      <h1>Show Details</h1>
      <div className="card-details">
        {show && (
          <div className="card-details">
            <h2>{show.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
            <div className="details-button">
              <button onClick={bookTicket}>Book Ticket</button>
              <button onClick={saveUserDetails}>Save User Details</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDetail;
