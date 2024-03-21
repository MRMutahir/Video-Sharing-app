import { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Comments from "../Components/Comments";
// import Card from "../Components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import { Dislike, FetchSucces, Like } from "../Redux/VideoSlice.js";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

// const Recommendation = styled.div`
//   flex: 2;
// `;

const VideoWrapper = styled.div``;

const Titte = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
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
  object-fit: cover;
`;

function Video() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const [channel, setchannel] = useState({});

  // console.log(
  //   currentUser.other.subscribedUsers,
  //   "currentUser channel subscribedUsers>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  // );

  // console.log(
  //   currentUser.other,
  //   "currentUser other>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  // );
  // console.log(
  //   currentVideo._id,
  //   "currentVideo other>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  // );
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        config.withCredentials = true;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    const fetchData = async () => {
      try {
        const videoRes = await axios.get(
          `http://localhost:8000/api/video/find/${path}`
        );
        // console.log(videoRes, "videoRes>>>>>>>>>>>>>>>>>>");
        const channelRes = await axios.get(
          `http://localhost:8000/api/user/find/${videoRes.data.userId}`
        );
        // console.log(channelRes, "channelRes>>>>>>>>>>>>>>>>>>");
        setchannel(channelRes.data);
        dispatch(FetchSucces(videoRes.data));
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    };
    fetchData();
  }, [path, dispatch]);
  const handellikes = async () => {
    await axios.put(
      `http://localhost:8000/api/user/like/${currentVideo._id}`,
      {},
      { withCredentials: true }
    );
    dispatch(Like(currentUser.other._id));
  };
  const handeldislikes = async () => {
    await axios.put(
      `http://localhost:8000/api/user/dislike/${currentVideo._id}`
    );
    dispatch(Dislike(currentUser.other._id));
  };
  const handelSUBSCRIB = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/user/subscribe/${channel._id}`
      );
      if (response.status === 201) {
        console.log("Already subscribed");
      } else if (response.status === 200) {
        console.log("Subscribed successfully");
      }
    } catch (error) {
      console.error("Error occurred while subscribing:", error);
    }
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
          {/* <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/njC3p49OJWU"
            title="Class 01 of JavaScript Crash Course Live | Intro, Variables, Data Types"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </VideoWrapper>
        <Titte>{currentVideo?.title}</Titte>
        <Details>
          <Info>
            {currentVideo?.views} views • {format(currentVideo?.createdAt)}
          </Info>
          {currentVideo && (
            <>
              <Buttons>
                <Button onClick={handellikes}>
                  {currentVideo.likes &&
                  currentVideo.likes.includes(currentUser.other?._id) ? (
                    <ThumbUpIcon
                      style={{
                        transform: "scale(1)",
                        color: "blue",
                      }}
                    />
                  ) : (
                    <ThumbUpOffAltIcon />
                  )}
                  {currentVideo.likes ? currentVideo.likes.length : 0}
                  &nbsp;&nbsp;Likes
                </Button>
                <Button onClick={handeldislikes}>
                  {currentVideo.dislikes &&
                  currentVideo.dislikes?.includes(currentUser.other?._id) ? (
                    <ThumbDownIcon
                      style={{
                        transform: "scale(1)",
                        color: "red",
                      }}
                    />
                  ) : (
                    <ThumbDownOffAltOutlinedIcon />
                  )}
                  {currentVideo.dislikes ? currentVideo.dislikes.length : 0}
                  &nbsp;&nbsp;Dislikes
                </Button>
              </Buttons>
            </>
          )}
        </Details>
        <HR />
        <Channel>
          <Channelinfo>
            <Image src={channel?.image} />
            <ChannelDetails>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{channel.subscribedUsers?.length}</ChannelCounter>
              <Discription>{currentVideo?.description}</Discription>
            </ChannelDetails>
          </Channelinfo>
          <Subscribe onClick={handelSUBSCRIB}>
            {currentUser.other.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <HR />
        <Comments videoId={currentVideo?._id} />
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
