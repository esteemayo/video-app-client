import styled from 'styled-components';
import Comment from './Comment';

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar
          src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo'
          alt=''
        />
        <Input type='text' placeholder='Add a comment...' />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
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
