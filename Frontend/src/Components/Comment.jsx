import React from "react";
import styled from "styled-components";
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

function Comment() {
  return (
    <Container>
      {" "}
      <Channelinfo>
        <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
        <ChannelDetails>
          <Commentdiv>
            {" "}
            <ChannelName>
              code with MR <ChannelDate>12-5-2023</ChannelDate>
            </ChannelName>
          </Commentdiv>
          <Discription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus illo
            ipsum natus repudiandae? Recusandae, odio distinctio reprehenderit
            tempora libero corporis.
          </Discription>
        </ChannelDetails>
      </Channelinfo>
    </Container>
  );
}

export default Comment;
