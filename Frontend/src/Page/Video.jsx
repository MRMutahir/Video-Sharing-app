import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../Components/Comments";
import Card from "../Components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div``;

const Titte = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
`;
const HR = styled.hr`
  margin: 15px 0px;
  border: 0.5 solid ${({ theme }) => theme.textSoft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Channelinfo = styled.div`
  display: flex;
  gap: 25px;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5 solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Discription = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  color: white;
  border: none;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 3px;
`;
const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

function Video() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  // const [video, setvideo] = useState({});
  const [channel, setchannel] = useState({});
  const path = useLocation().pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(
          `http://localhost:8000/api/video/find/${path}`
        );
        const channelRes = await axios.get(
          `http://localhost:8000/api/user/${videoRes.userId}`
        );
        // setvideo(videoRes.data);
        setchannel(channelRes.data);
        dispatch(FetchSucces(videoRes.data));
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
      fetchData();
    };
  }, [path]);
  console.log(path);
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/njC3p49OJWU"
            title="Class 01 of JavaScript Crash Course Live | Intro, Variables, Data Types"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Titte>Test Video</Titte>
        <Details>
          {" "}
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Buttons>
              <Button>
                <ThumbUpOutlinedIcon /> 123
              </Button>
              <Button>
                <ThumbDownOffAltOutlinedIcon /> Dislike
              </Button>
              <Button>
                <ReplyOutlinedIcon /> Share
              </Button>
              <Button>
                <AddTaskOutlinedIcon /> Save
              </Button>
            </Buttons>
          </Buttons>
        </Details>
        <HR />
        <Channel>
          <Channelinfo>
            <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <ChannelDetails>
              <ChannelName>code with MR</ChannelName>
              <ChannelCounter>200k subscribe</ChannelCounter>
              <Discription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                illo ipsum natus repudiandae? Recusandae, odio distinctio
                reprehenderit tempora libero corporis.
              </Discription>
            </ChannelDetails>
          </Channelinfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <HR />
        <Comments />
      </Content>
      {/* <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation> */}
    </Container>
  );
}

export default Video;
