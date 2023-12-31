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
import { format } from "timeago.js";
import { Dislike, FetchSucces, Like } from "../Redux/VideoSlice.js";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
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
  const path = useLocation().pathname.split("/")[2];
  const [channel, setchannel] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      console.log("Use effect chl raha hen ");
      try {
        const videoRes = await axios.get(
          `/video/find/${path}`
        );
        const channelRes = await axios.get(
          `/user/find/${videoRes.data.userId}`
        );
        setchannel(channelRes.data);
        dispatch(FetchSucces(videoRes.data));
        // console.log(currentVideo, "currentVideo>>>>>>>>>>>>>>>>>>>>>>>>");
        // console.log(currentVideo, ">>>>>>>>>>>>>>>>>>>>>>>>currentVideo");
        // console.log(currentUser, ">>>>>>>>>>>>>>>>>>>>>>>>>currentUser");
        console.log(videoRes.data.userId, ">>>>>>>>>>>>>>>>>>>>videoRes.data.userId ");
        console.log(videoRes, ">>>>>>>>>>>>>>>>>>>>videoRes");
        console.log(channelRes, ">>>>>>>>>>>>>>>>>>channelRes");
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    };
    fetchData();
  }, [path, dispatch]);
  const handellikes = async () => {
    await axios.put(`/user/like/${currentVideo._id}`);
    dispatch(Like(currentUser._id));
  };
  const handeldislikes = async () => {
    await axios.put(
      `/user/dislike/${currentVideo._id}`
    );
    dispatch(Dislike(currentUser._id));
  };

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
        <Titte>{currentVideo?.title}</Titte>
        <Details>
          {" "}
          <Info>
            {currentVideo?.views} views • {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Buttons>
              <Button onClick={handellikes}>
                {currentVideo?.likes?.includes(currentUser._id) ? (
                  <ThumbUpOffAltIcon />
                ) : (
                  <ThumbUpOutlinedIcon />
                )}
                {currentVideo?.likes.length}
              </Button>
              <Button onClick={handeldislikes}>
                {currentVideo?.dislikes?.includes(currentUser._id) ? (
                  <ThumbDownOffAltIcon />
                ) : (
                  <ThumbDownOffAltOutlinedIcon />
                )}{" "}
                Dislike
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
            <Image src={channel?.imgUrl} />
            <ChannelDetails>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{channel?.subscribers}</ChannelCounter>
              <Discription>{currentVideo?.description}</Discription>
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
