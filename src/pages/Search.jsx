import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';

const Search = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => ({ ...state.video }));

  return (
    <Container>Search</Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default Search;
