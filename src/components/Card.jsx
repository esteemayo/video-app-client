import millify from 'millify';
import { format } from 'timeago.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { excerpts } from 'utils';
import { getUser } from 'services/userService';

const Card = ({ slug, type, user, views, title, imgUrl, createdAt }) => {
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (type === 'random') {
          const { data } = await getUser(user);
          setChannel(data.user);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [user, type]);

  return (
    <Link to={`/video/${slug}`} style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image
          type={type}
          src={imgUrl}
          alt=''
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={channel?.img ?? user?.img}
            alt=''
          />
          <Texts>
            <Title>{excerpts(title, 60)}</Title>
            <ChannelName>{channel?.name ?? user?.name}</ChannelName>
            <Info>{millify(views)} views • {format(createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  width: ${({ type }) => type !== 'sm' && '36rem'};
  margin-bottom: ${({ type }) => type === 'sm' ? '1rem' : '4.5rem'};
  display: ${({ type }) => type === 'sm' && 'flex'};
  gap: 1rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: ${({ type }) => type === 'sm' ? '12rem' : '20.2rem'};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${({ type }) => type !== 'sm' && '1.6rem'};
  gap: 1.2rem;
  flex: 1;
`;

const ChannelImage = styled.img`
  display: ${({ type }) => type === 'sm' && 'none'};
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
