import Menu from "../src/Components/Menu";
import Navbar from "../src/Components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { darkTheme, lightTheme } from "./Utils/Theme";
import { useState } from "react";
import Home from "../src/Page/Home";
import Sign from "../src/Page/Sign";
import Video from "./Page/Video";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Signin from "./Page/Signin";
// import Home from "@mui/icons-material/Home";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkmode, setdarkmode] = useState(true);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkmode={darkmode} setdarkmode={setdarkmode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home   type="rondom"/>} />
                <Route path="trends" element={<Home type="trend"  />} />
                <Route path="subscription" element={<Home type="sub"   />} />
                <Route path="signin" element={<Sign/>} />
                <Route element={<Sign />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
