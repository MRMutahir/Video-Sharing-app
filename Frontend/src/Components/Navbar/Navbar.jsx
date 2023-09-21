import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
`
const Search = styled.div`
`
const Warpper = styled.div`
`
const Input = styled.div`
`
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;


function Navbar() {
    return (
        <Container>
            <Warpper>
                <Search>
                    <Input placeholder='Search ' />
                    <SearchIcon />
                </Search>
                <Button> <AccountCircleOutlinedIcon />  Sign in</Button>
            </Warpper>
        </Container>
    )
}

export default Navbar