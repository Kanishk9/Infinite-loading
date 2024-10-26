import React, { useEffect, useState } from "react";
import MovieTab from "../components/MovieTab";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const Home = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === true) {
      fetchData();
    }
  }, [loading]);

  return (
    <>
      {loading
        ? "Loading..."
        : data.map(({ id, title, body }) => (
            <MovieTab key={id} id={id} title={title} body={body} />
          ))}
    </>
  );
};

export default Home;
