import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container>
        <Image src='https://i.ytimg.com/vi/yIaXoop8gl4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2VJRNoxplXXHPk86CweGbZzARow' />
        <Details>
          <ChannelImage src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo' />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  width: 36rem;
  margin-bottom: 4.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 20.2rem;
`;

const Details = styled.div`
  display: flex;
  margin-top: 1.6rem;
  gap: 1.2rem;
`;

const ChannelImage = styled.img`
  width: 3.6rem;
  height:3.6rem;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textSoft};
  margin: 0.9rem 0;
`;

const Info = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textSoft};
`;

export default Card;
