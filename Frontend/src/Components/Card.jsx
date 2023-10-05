import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import  {format}  from "timeago.js";
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
function Card({ type, Card }) {
  // console.log(Card._id == "64f46e504b234353ada20ede");
  // console.log(Card.userId);
  const [Channel, setChannel] = useState({});
  useEffect(() => {
    fetchChannel();
  }, [Card.userId]);

  const fetchChannel = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/video/find/64f3eaf160ec7a9f84a62405`);
      setChannel(res.data);
    } catch (error) {
      console.log("err", error);
    }
  };
  // console.log(Channel._id, ">>>>>>>>>>>>>>>>>>Channel>>>>>>>>>>>>>>>");
  console.log(Channel, ">>>>>>>>>>>>>>>>Card>>>>>>>>>>>>");

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={Card.imgURL} />
        <Details type={type}>
          <ChannelImage
            type={type}
            src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg'
          />
          <Texts>
            <Title>{Card.title}</Title>
            <ChannelName>Code with MR</ChannelName>
            <Info>
              {Card.views} views {format(Card.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
