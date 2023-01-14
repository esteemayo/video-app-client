import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import { createComment, fetchCommentsOnVideo } from 'features/video/videoSlice';

const Comments = ({ videoId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.user }));
  const { comments } = useSelector((state) => ({ ...state.video }));

  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = {
      desc,
      video: videoId,
    };

    dispatch(createComment({ videoId, comment }));
    setDesc('');
  };

  useEffect(() => {
    dispatch(fetchCommentsOnVideo(videoId));
  }, [videoId, dispatch]);

  return (
    <Container>
      <NewComment>
        <Avatar src={user.img} alt='' />
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            value={desc}
            placeholder='Add a comment...'
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form>
      </NewComment>
      {comments?.map((item) => {
        return <Comment key={item._id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  display: inline-block;
  font-family: inherit;
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  caret-color: ${({ theme }) => theme.textSoft};
`;

export default Comments;
