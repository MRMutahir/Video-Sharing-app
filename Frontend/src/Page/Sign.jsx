import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  background-color: transparent;
  outline: inherit;
  
  color: ${({ theme }) => theme.textSoft};
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;

  font-size: 12px;
  margin-top: 10px;
  padding: 10px;
`;

const Links = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Link = styled.div`
  margin-left: 30px;
`;

function Sign() {
  const [name, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function handelSignin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/signin`,
        { name, password }
      );
      console.log(response.data);
    } catch (error) {
      if (error) console.log("user not found ");
      // console.log(error);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to LamaTube</SubTitle>
        <Input
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
          // value={username}
          // ref={username}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
          // value={password}
          // ref={password}
        />
        <Button onClick={handelSignin}>Sign in</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
}

export default Sign;
