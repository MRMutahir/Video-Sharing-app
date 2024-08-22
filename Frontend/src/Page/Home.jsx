import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import axios from "axios";
import BASE_URL from "../service/service.js";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  // console.log(type, ">>>>>>>>>>>>>>>>type");
  useEffect(() => {
    fetchVideo();
  }, [type]);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/video/${type}`, {
        withCredentials: true,
      });
      setVideos(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  // console.log(videos, ">>>>>>>>>>>>>>>>>>>>>>>>>>videos");

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
