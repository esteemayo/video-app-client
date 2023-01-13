import { useState } from 'react';
import styled from 'styled-components';

const Upload = ({ onClose }) => {
  const [img, setImg] = useState(null);
  const [tags, setTags] = useState([]);
  const [desc, setDesc] = useState(null);
  const [title, setTitle] = useState(null);
  const [video, setVideo] = useState(null);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => onClose(true)}>X</Close>
        <Title>Upload a New Video</Title>
        <Label>Video</Label>
        <Input
          type='file'
          accept='video/*'
          onChange={(e) => setVideo(e.target.files[0])}
        />
        <Input
          type='text'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <Desc
          rows={8}
          placeholder='Description'
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input type='text' placeholder='Separate the tags with commas.' />
        <Label>Image</Label>
        <Input
          type='file'
          accept='image/*'
          onChange={(e) => setImg(e.target.files[0])}
        />
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
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
