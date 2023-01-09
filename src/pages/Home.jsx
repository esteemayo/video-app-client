import { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';
import { fetchRandomVideos, reset } from 'features/video/videoSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => ({ ...state.videos }));

  useEffect(() => {
    dispatch(fetchRandomVideos());
    return () => dispatch(reset());
  }, [dispatch]);

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
