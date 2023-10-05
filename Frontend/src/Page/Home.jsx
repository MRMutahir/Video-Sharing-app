import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideo();
  }, [type]);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/video/${type}`);
      setVideos(res.data);
      // console.log(res);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <Container>
      {videos.map((video, index) => (
        <Card key={video._id} Card={video} />
      ))}
    </Container>
  );
};

export default Home;
