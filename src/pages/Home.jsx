import { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';
import {
  fetchRandomVideos,
  fetchSubscribeVideos,
  fetchTrendingVideos,
  reset,
} from 'features/video/videoSlice';

const Home = ({ type }) => {
  const dispatch = useDispatch();
  const { videos, isError } = useSelector((state) => ({ ...state.videos }));

  useEffect(() => {
    switch (type) {
      case 'random':
        dispatch(fetchRandomVideos());
        return;

      case 'trend':
        dispatch(fetchTrendingVideos());
        return;

      case 'subscriptions':
        dispatch(fetchSubscribeVideos());
        return;

      default:
        break;
    };

    return () => dispatch(reset());
  }, [dispatch, type]);

  useEffect(() => {
    isError && toast.error(isError);
  }, [isError]);

  return (
    <Container>
      {videos?.map((item) => {
        return <Card key={item._id} {...item} />
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Home;
