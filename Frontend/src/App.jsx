import Menu from "../src/Components/Menu"
import Navbar from "../src/Components/Navbar"
import styled from "styled-components"
import './App.css'


const Container = styled.div`
display : flex ;

`;
const Main = styled.div`
flex:7;

`;
const Wrapper = styled.div``;
function App() {


  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>Video Card</Wrapper>
      </Main>

    </Container>
  )
}

export default App
