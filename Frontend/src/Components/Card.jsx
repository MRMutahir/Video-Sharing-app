import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: ${(props) => (props.type !== "sm" && "360px") };
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
function Card({ type }) {
  console.log(type == "sm");
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/07/Screen-Shot-2022-07-11-at-11.36.48-AM.png"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://cdn2.hubspot.net/hubfs/6062099/full%20stack%20%281%29.png"
          />
          <Texts>
            <Title>Array function</Title>
            <ChannelName>Code with MR</ChannelName>
            <Info>246K subscribers</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
