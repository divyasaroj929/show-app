import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ShowList = ({ history }) => {
  const [shows, setShows] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log("Error fetching shows: ", error));
  }, []);

  const showDetail = (id) => {
    navigate(`/show/${id}`);
  };

  return (
    <div className="container">
      <h1>Show List</h1>
      <div className="groups-card">
        {shows.map(({ show }) => (
          <div key={show.id} className="cards">
            <h2>{show.name}</h2>
            <button onClick={() => showDetail(show.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
