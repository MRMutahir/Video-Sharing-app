<<<<<<< HEAD
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../FirebaseConfig.js";
import { useNavigate } from "react-router-dom";

=======
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Upload = ({ setOpen }) => {
  return <Container>
    
  </Container>;
};

export default Upload;
>>>>>>> 1c639db663287f033eced6fbb3d232b5a41f4928
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
<<<<<<< HEAD
  left: 0;
  top: 0;
  background-color: #000000a6;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
`;
const Title = styled.h1`
  text-align: center;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 3px;
  background-color: transparent;
`;
const Description = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 3px;
  background-color: transparent;
  min-height: 100px;
  max-height: auto;
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

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [videoPerc, setVideoPerc] = useState(0);
  const [imgPerc, setimgPerc] = useState(0);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [inputs, setInputs] = useState({});
  //   console.log(inputs, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>inputs");
  const navigate = useNavigate();
  //   const handelChange = (e) => {
  //     // console.log(
  //     //   { [e.target.value]: e.target.value },
  //     //   "[e.target.value]: e.target.value>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  //     // );
  //     setInputs((prev) => {
  //       // console.log(prev,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  //       return { ...prev, [e.target.value]: e.target.value };
  //     });
  //   };
  const handelTags = (e) => {
    setTags(e.target.value.split(","));
  };
  const uploadFile = (file, urlType) => {
    const fileName = "MRtubeVideos/" + new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        urlType === "imgUrl"
          ? setimgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);
  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const handelUpload = async () => {
    console.log({
      title: title,
      ...inputs,
      description: description,
      tags,
    });
    // console.log(description, ">>>>>>>>>>>>>>>>>>description");
    // console.log(title, ">>>>>>>>>>>>>>>>>>title");
    // console.log(tags, ">>>>>>>>>>>>>>>>>>tabel");
    // console.log(inputs, "inputs>>>>");
    // e.preventDefault();
    const res = await axios.post(
      "http://localhost:8000/api/video/",
      {
        title: title,
        ...inputs,
        description: description,
        tags,
      },
      {},
      { withCredentials: true }
    );
    setOpen(false);
    res.status === 200 && navigate(`/video/${res.data._id}`);
  };
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>Upload a new Video</Title>
        <Label>Video</Label>
        {videoPerc > 0 ? (
          "Uploading:" + videoPerc + "%"
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Input
          type="text"
          placeholder="Title"
          name="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Description
          row={8}
          placeholder="Description"
          name="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Separate the tags with commas"
          onChange={handelTags}
        />
        <Label>Image</Label>
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}

        <Button onClick={handelUpload}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
=======
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
>>>>>>> 1c639db663287f033eced6fbb3d232b5a41f4928
