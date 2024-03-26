import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import Card from "../Components/Card";
import RecommendationCard from "./RecommendationCard";

const Container = styled.div`
  flex: 2;
`;
const Recommendation = ({ tags }) => {
  //   console.log(tags, "tags?????????????????????///");
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/video/tags?tags=${tags}`
        );
        setVideo(res);
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    };
    fetchData();
  }, [tags]);
  // console.log(video, ">>>>>>>>>>>>>>>>>>>>>>>>>>>tags video");

  return (
    <Container>
      {/* <Card type="sm" key={video?._id} video={video} />
      <Card type="sm" key={video?._id} video={video} /> */}
      <RecommendationCard type="sm" video={video} />
    </Container>
  );
};

export default Recommendation;
