import React, { useEffect, useState } from "react";
import MovieTab from "../components/MovieTab";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const BASE_URL = `https://catfact.ninja/facts?page=${page}&limit=10`;

  //GET API call
  const fetchData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setData((prevData) => [...prevData, ...data.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (loading === true) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight > document.body.scrollHeight - 300) {
      setLoading(true);
    }
  };

  //Adding event listner for scroll event
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {data?.map(({ length, fact }) => (
        <MovieTab key={length} length={length} fact={fact} />
      ))}
      {loading && <h1 className="loadingText">"Loading..."</h1>}
    </>
  );
};

export default Home;
