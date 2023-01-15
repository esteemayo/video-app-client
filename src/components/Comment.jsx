import { format } from 'timeago.js';
import styled from 'styled-components';

import userDefaultImg from 'img/user-default.jpg';

const Comment = ({ desc, user, createdAt }) => {
  return (
    <Container>
      <Avatar src={user.img ?? userDefaultImg} alt='' />
      <Details>
        <Name>
          {user.name} <Date>{format(createdAt)}</Date>
        </Name>
        <Text>{desc}</Text>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
`;

const Date = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 0.5rem;
`;

const Text = styled.span`
  font-size: 1.4rem;
`;

export default Comment;
