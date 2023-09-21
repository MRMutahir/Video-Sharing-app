import Menu from "../src/Components/Menu"
import Navbar from "../src/Components/Navbar"
import styled, { ThemeProvider } from "styled-components"
import './App.css'
import { darkTheme, lightTheme } from "./Utils/Theme";
import { useState } from "react";


const Container = styled.div`
display : flex ;

`;
const Main = styled.div`
flex:7;
background-color: ${({ theme }) => theme.bg}

`;
const Wrapper = styled.div``;
function App() {
  const [darkmode, setdarkmode] = useState(true)

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkmode={darkmode} setdarkmode={setdarkmode} />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
