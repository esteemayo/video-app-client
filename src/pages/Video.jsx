import { useEffect } from 'react';
import { format } from 'timeago.js';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useDispatch, useSelector } from 'react-redux';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

import Card from 'components/Card';
import Comments from 'components/Comments';
import { dislikeVideo, fetchVideo, likeVideo } from 'features/video/videoSlice';

const Video = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.user }));
  const { video } = useSelector((state) => ({ ...state.video }));

  const userId = user?._id;
  const videoId = video?._id;

  const handleLike = () => {
    dispatch(likeVideo({ videoId, userId }));
  };

  const handleDislike = () => {
    dispatch(dislikeVideo({ videoId, userId }));
  };

  useEffect(() => {
    dispatch(fetchVideo(slug));
  }, [slug, dispatch]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height='720'
            src={video.videoUrl}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>{video.title}</Title>
        <Details>
          <Info>{video.views} views • {format(video.createAt)}</Info>
          <Buttons>
            <Button onClick={handleLike}>
              {video.likes?.includes(user?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )} {video.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {video.dislikes?.includes(user?._id) ? (
                <ThumbDownIcon />
              ) : (
                < ThumbDownOffAltOutlinedIcon />
              )} Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image
              src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo'
              alt=''
            />
            <ChannelDetail>
              <ChannelName>{video.user?.name}</ChannelName>
              <ChannelCounter>{video.user?.subscribers} subscribers</ChannelCounter>
              <Description>{video.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>
            {user.subscribedUsers?.includes(video.user?._id)
              ? 'SUBSCRIBED'
              : 'SUBSCRIBE'
            }
          </Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        {/* <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' /> */}
      </Recommendation>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.8rem;
  text-transform: capitalize;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 5;
`;

const Hr = styled.hr`
  margin: 1.5rem 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSoft};
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
`;

const Subscribe = styled.button`
  border: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #cc1a00;
  color: #fff;
  border-radius: 0.3rem;
  height: max-content;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

export default Video;
