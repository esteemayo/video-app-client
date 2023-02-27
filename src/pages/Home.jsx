import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Card from 'components/Card';
import {
  fetchRandomVideos,
  fetchSubscribeVideos,
  fetchTrendingVideos,
  reset,
} from 'features/video/videoSlice';

const Home = ({ type }) => {
  const dispatch = useDispatch();
  const { videos, isError } = useSelector((state) => ({ ...state.video }));

  useEffect(() => {
    switch (type) {
      case 'random':
        dispatch(fetchRandomVideos());
        return;

      case 'trends':
        dispatch(fetchTrendingVideos());
        return;

      case 'subscriptions':
        dispatch(fetchSubscribeVideos());
        return;

      default:
        break;
    };
  }, [dispatch, type]);

  useEffect(() => {
    isError && toast.error(isError);
    return () => dispatch(reset());
  }, [isError, dispatch]);

  return (
    <Container>
      {videos?.map((item) => {
        return <Card key={item._id} type={type} {...item} />;
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
