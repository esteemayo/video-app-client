import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import app from '../firebase';
import { createVideo } from 'services/videoService';

const Upload = ({ onClose }) => {
  const navigate = useNavigate();

  const [img, setImg] = useState(null);
  const [tags, setTags] = useState([]);
  const [video, setVideo] = useState(null);
  const [imgPerc, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState(null);
  const [videoPerc, setVideoPerc] = useState(0);

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(','));
  };

  const uploadFile = (file, urlType) => {
    const fileName = `${new Date().getTime()}-${file.name}`;

    const storage = getStorage(app);
    const storageRef = ref(storage, `videos/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === 'imgUrl' ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;

          default:
            break;
        };
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => ({ ...prev, [urlType]: downloadURL }));
        });
      }
    );
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const newVideo = {
      ...inputs,
      tags,
    };

    const { data } = await createVideo({ ...newVideo });
    onClose(true);
    navigate(`/video/${data.video.slug}`);
  };

  useEffect(() => {
    video && uploadFile(video, 'videoUrl');
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, 'imgUrl');
  }, [img]);

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => onClose(true)}>X</Close>
        <Title>Upload a New Video</Title>
        <Label htmlFor='video'>Video</Label>
        {videoPerc > 0 ? (
          `Uploading: ${videoPerc}%`
        ) : (
          <Input
            id='video'
            type='file'
            accept='video/*'
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Input
          type='text'
          name='title'
          placeholder='Title'
          onChange={handleChange}
        />
        <Desc
          rows={8}
          name='desc'
          placeholder='Description'
          onChange={handleChange}
        />
        <Input
          type='text'
          name='tags'
          onChange={handleTags}
          placeholder='Separate the tags with commas.'
        />
        <Label htmlFor='img'>Image</Label>
        {imgPerc > 0 ? (
          `Uploading: ${imgPerc}%`
        ) : (
          <Input
            id='img'
            type='file'
            accept='image/*'
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const Wrapper = styled.div`
  width: 60rem;
  height: 60rem;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  border-radius: 0.3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  display: inline-block;
  font-family: inherit;
  padding: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 0.3rem;
  outline-color: #555;
  z-index: 999;
`;

const Desc = styled.textarea`
  display: inline-block;
  font-family: inherit;
  padding: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 0.3rem;
  outline-color: #555;
  resize: none;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  outline-color: #555;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 1.4rem;
  text-transform: capitalize;
`;

export default Upload;
