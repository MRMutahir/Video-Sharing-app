import Menu from "../src/Components/Menu"
import Navbar from "../src/Components/Navbar"
import styled, { ThemeProvider } from "styled-components"
import './App.css'


const Container = styled.div`
display : flex ;

`;
const Main = styled.div`
flex:7;
background-color: #181818;

`;
const Wrapper = styled.div``;
function App() {


  return (
    <ThemeProvider>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper><h1>Hi</h1></Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
