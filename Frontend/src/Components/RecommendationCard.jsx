import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type == "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  /* background: red; */
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type == "sm" ? "120px" : "202px")};
  background-color: #999;
  cursor: pointer;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  gap: 12px;
  margin-top: ${(props) => (props.type == "sm" ? "16px" : "0px")};
  flex: 1;
`;
const ChannelImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: aliceblue;
  display: ${(props) => (props.type == "sm" ? "none" : "block")};
  object-fit: cover;
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  margin: 10px 0px;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
  font-size: 14px;

  color: ${({ theme }) => theme.textSoft};
`;
const RecommendationCard = ({ type, video }) => {
  const videoData = video.data;

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const channelsData = await Promise.all(
          videoData.map(async (ele) => {
            const res = await axios.get(
              `http://localhost:8000/api/user/find/${ele.userId}`
            );
            return res.data;
          })
        );
        setChannels(channelsData);
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchChannels();
  }, [videoData]);

  return (
    <>
      {videoData?.map((ele, index) => (
        <Link
          key={ele._id}
          to={`/video/${ele._id}`}
          style={{ textDecoration: "none" }}
        >
          <Container key={ele._id} type={type}>
            <Image type={type} src={ele.imgUrl} />
            <Details type={type}>
              <ChannelImage type={type} src={channels[index]?.image} />
              <Texts>
                <Title>{ele.title}</Title>
                <ChannelName>{channels[index]?.name}</ChannelName>
                <Info>
                  {ele.views} views {format(ele.createdAt)}
                </Info>
              </Texts>
            </Details>
          </Container>
        </Link>
      ))}
    </>
  );
};

export default RecommendationCard;
