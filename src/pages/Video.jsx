import millify from 'millify';
import { format } from 'timeago.js';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useDispatch, useSelector } from 'react-redux';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

import { excerpts } from 'utils';
import Comments from 'components/Comments';
import userDefaultImg from 'img/user-default.jpg';
import Recommendation from 'components/Recommendation';
import { subscription, unsubscribe } from 'features/user/userSlice';
import { dislikeVideo, fetchVideo, likeVideo, updateViews } from 'features/video/videoSlice';

const Video = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.user }));
  const { video } = useSelector((state) => ({ ...state.video }));

  const [showMore, setShowMore] = useState(false);

  const userId = user?._id;
  const videoId = video?._id;

  const handleLike = () => {
    user && dispatch(likeVideo({ videoId, userId }));
  };

  const handleDislike = () => {
    user && dispatch(dislikeVideo({ videoId, userId }));
  };

  const handleSubscribe = (channelId) => {
    user.subscribedUsers.includes(channelId)
      ? dispatch(unsubscribe(channelId))
      : dispatch(subscription(channelId));
  };

  useEffect(() => {
    dispatch(fetchVideo(slug));
  }, [slug, dispatch]);

  useEffect(() => {
    dispatch(updateViews(videoId));
  }, [videoId, dispatch]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={video.videoUrl} controls />
        </VideoWrapper>
        <Title>{video.title}</Title>
        <Details>
          <Info>
            {millify(video.views)} views • {format(video.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {video.likes?.includes(userId) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )} {millify(video.likes?.length)}
            </Button>
            <Button onClick={handleDislike}>
              {video.dislikes?.includes(userId) ? (
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
            <Image src={video.user?.img ?? userDefaultImg} alt='' />
            <ChannelDetail>
              <ChannelName>{video.user?.name}</ChannelName>
              <ChannelCounter>
                {millify(video.user?.subscribers, { precision: 2 })} subscribers
              </ChannelCounter>
              <Description>
                {showMore ? video.desc : excerpts(video?.desc, 250)} {' '}
                <ShowButton option={showMore} onClick={() => setShowMore(!showMore)}>
                  Show {showMore ? 'less' : 'more'}
                </ShowButton>
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          {userId !== video.user?._id && (
            <Subscribe onClick={() => user ? handleSubscribe(video.user?._id) : null}>
              {user?.subscribedUsers?.includes(video.user?._id)
                ? 'SUBSCRIBED'
                : 'SUBSCRIBE'
              }
            </Subscribe>
          )}
        </Channel>
        <Hr />
        <Comments videoId={videoId} />
      </Content>
      <Recommendation tags={video.tags} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const VideoWrapper = styled.div``;

const VideoFrame = styled.video`
  max-height: 72rem;
  width: 100%;
  object-fit: cover;
`;

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

const ShowButton = styled.button`
  border: none;
  display: ${({ option }) => option ? 'block' : 'inline-block'};
  font-weight: 600;
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
  margin-top: ${({ option }) => option && '1rem'};
  cursor: pointer;
`;

const Subscribe = styled.button`
  border: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 500;
  height: max-content;
  padding: 1rem 2rem;
  background-color: #cc1a00;
  color: #fff;
  border-radius: 0.3rem;
  outline-color: #555;
  cursor: pointer;
`;

export default Video;
