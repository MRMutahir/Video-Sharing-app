import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import axios from "axios";
import { useEffect } from "react";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get("/video/rondom");
       // console.log(res, " ye res hain >>>>");
       setVideos(res.data);
    };
    fetchVideo();
  }, []);
  console.log(videos);
  return (
    <Container>
      {videos.map((video) => (
        <Card />
      ))}
    </Container>
  );
}

export default Home;
