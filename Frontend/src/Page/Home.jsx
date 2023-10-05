import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      // Use the correct endpoint URL for fetching random videos
      const res = await axios.get("http://localhost:8800/api/video/random");
      setVideos(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <Container>
      {videos.map((video, index) => (
        // Pass the video data to the Card component and provide a unique key to each Card
        <Card key={index} video={video} />
      ))}
    </Container>
  );
};

export default Home;