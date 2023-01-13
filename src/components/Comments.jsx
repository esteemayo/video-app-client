import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Comment from './Comment';
import { fetchCommentsOnVideo, reset } from 'features/video/videoSlice';

const Comments = ({ videoId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.user }));
  const { comments } = useSelector((state) => ({ ...state.video }));

  useEffect(() => {
    dispatch(fetchCommentsOnVideo(videoId));
    dispatch(reset());
  }, [videoId, dispatch]);

  return (
    <Container>
      <NewComment>
        <Avatar
          src=''
          alt=''
        />
        <Input type='text' placeholder='Add a comment...' />
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

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  padding: 0.5rem;
  caret-color: ${({ theme }) => theme.textSoft};
`;

export default Comments;
