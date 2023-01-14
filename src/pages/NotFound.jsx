import styled from 'styled-components';
import img from 'img/404.png';

const NotFound = () => {
  return (
    <Container>
      <Image src={img} alt=''/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img``;

export default NotFound;
