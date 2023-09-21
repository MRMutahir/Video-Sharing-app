import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`
const Image = styled.img`
    width: 100%;
    height: 202px;
  background-color: #999;
    cursor: pointer;
`
const Details = styled.div`
   display: flex;
   gap: 12px;
   margin-top: 16px;
`
const ChannelImage = styled.img`
 height: 40px;
 width: 40px;
 border-radius: 50%;
 background-color:aliceblue;
`
function Card() {
    return (
        <Container>
            <Image src='https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/07/Screen-Shot-2022-07-11-at-11.36.48-AM.png' />
            <Details >
                <ChannelImage />
            </Details>
        </Container>
    )
}

export default Card