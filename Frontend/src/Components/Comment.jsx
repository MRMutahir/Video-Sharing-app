/* eslint-disable react/prop-types */
import { format } from "timeago.js";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
const Container = styled.div`
  display: flex;
  gap: 24px;
  margin: 30px 0px;
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
  font-size: 12px;
  margin: 10px 0px;
`;
const ChannelDate = styled.data`
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  margin-left: 10px;
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
const Commentdiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

function Comment({ comment }) {
  const { currentUser } = useSelector((state) => state.user);
  const [channel, setChannel] = useState("");

  useEffect(() => {
    const channelFetch = async () => {
      try {
        const channelRes = await axios.get(
          `http://localhost:8000/api/user/find/${comment.userId}`
        );
        setChannel(channelRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    channelFetch();
  }, [comment.userId]);
  // console.log(channel, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>channel");

  return (
    <Container>
      <Channelinfo>
        <Image src={channel?.image} />
        <ChannelDetails>
          <Commentdiv>
            <ChannelName>
              {/* {comment?.desc}{" "} */}
              {channel?.name}
              <ChannelDate>{format(comment?.createdAt)}</ChannelDate>
            </ChannelName>
          </Commentdiv>
          <Discription>{comment?.desc}</Discription>
        </ChannelDetails>
      </Channelinfo>
    </Container>
  );
}

export default Comment;
