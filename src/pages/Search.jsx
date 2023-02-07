import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Card from 'components/Card';
import { searchVideos } from 'features/video/videoSlice';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => ({ ...state.video }));

  const query = useQuery();
  const q = query.get('q');

  useEffect(() => {
    dispatch(searchVideos(q));
  }, [dispatch, q]);

  return (
    <Container>
      {videos?.map((item) => {
        return <Card key={item._id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Search;
