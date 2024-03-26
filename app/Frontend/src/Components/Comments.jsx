import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import styled from "styled-components";
import Comment from "./Comment";
const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Input = styled.input`
  border: none;
  border: 1px solid ${({ theme }) => theme.textSoft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
function Comments({ videoId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/comment/find/${videoId}`
        );
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.other.image} />
        <Input placeholder="add comments ....." />
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
}

export default Comments;
