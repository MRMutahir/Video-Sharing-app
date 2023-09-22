import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

// const Container =  styled.div`

// `

// const Container =  styled.div`

// `
function Sign() {
  return <Container>Sign in</Container>;
}

export default Sign;
