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
function Card({ type, video }) {
  // console.log(Card._id == "64f46e504b234353ada20ede");
  // console.log(video);
  const [channel, setChannel] = useState({});
  useEffect(() => {
    fetchChannel();
  }, [video.userId]);

  const fetchChannel = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/user/${video.userId}`

      );
      setChannel(res.data);
    } catch (error) {
      console.log("err", error);
    }
  };
return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgURL} />
        <Details type={type}>
          <ChannelImage type={type} src={channel.image} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views {format(Card.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
