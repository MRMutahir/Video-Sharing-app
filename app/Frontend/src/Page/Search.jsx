import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import RecommendationCard from "../Components/RecommendationCard";
import BASE_URL from "../service/service";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Search = () => {
  const [video, setVideo] = useState("");
  const qery = useLocation().search;
  console.log(qery, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>qery");

  useEffect(() => {
    const fetchdataFoo = async () => {
      const fetchdata = await axios.get(
        `${BASE_URL}/api/video/search/${qery}`
      );
      setVideo(fetchdata);
      //   console.log(fetchdata, " fetchdata>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    };
    // console.log(fetchdata);
    fetchdataFoo();
  }, [qery]);
  //   console.log(video, ">>> vidoe >>>>>>>>>>>>>>>>>>>>>>>>>>>");
  //
  return (
    <Container>
      <RecommendationCard video={video} />
    </Container>
  );
};

export default Search;
