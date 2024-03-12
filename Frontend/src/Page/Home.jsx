import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import axios from "axios";

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
      const res = await axios.get(`http://localhost:8000/api/video/${type}`);
      // const res = await axios.get(`http://localhost:8000/api/video/subscribes`);
      // console.log(
      //   res,
      //   ">>>>>>>>>>>>>>type",
      //   type,
      //   ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>res"
      // );
      setVideos(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
