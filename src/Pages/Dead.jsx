// src/DisasterVictims.js
import React, { useState, useEffect } from "react";

const Dead = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "'https://jsonplaceholder.typicode.com/todos/1"
        ); // Ganti dengan URL API yang sesuai
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Jumlah Korban Meninggal</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Nama Bencana: {item.disasterName}</p>
            <p>Jumlah Korban: {item.victimCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dead;
