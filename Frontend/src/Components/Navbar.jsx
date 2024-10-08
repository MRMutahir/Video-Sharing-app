import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  background: ${({ theme }) => theme.bgLighter};
  top: 0;
  height: 56px;
`;
const Warpper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  width: 100%;
  outline: none;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;

  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpenModal] = useState(false); // Correct initialization
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  // console.log(open, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>open");
  // console.log(currentUser, "currentUser>>>>>>>>>>>>");
  // console.log(currentUser.other.image, "currentUser>>>>>>>>>>>>");
  // console.log(currentUser.other.name, "currentUser>>>>>>>>>>>>");
  return (
    <>
      <Container>
        <Warpper>
          <Search>
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchIcon onClick={() => navigate(`/search?q=${q}`)} />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallIcon
                style={{
                  cursor: "pointer",
                }}
                // onClick={() => setOpen(true)}
                onClick={() => setOpenModal(true)}
              />
              <Avatar src={currentUser?.image || currentUser?.other.image} />
              {currentUser?.name || currentUser?.other.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                {" "}
                <AccountCircleOutlinedIcon /> Sign in
              </Button>
            </Link>
          )}
        </Warpper>
      </Container>
      {open && <Upload setOpen={setOpenModal} />}
    </>
  );
}

export default Navbar;
