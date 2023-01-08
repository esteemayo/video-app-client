import styled from 'styled-components';
import logo from '../img/logo.png';

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logo} alt='logo' />
          YouTube
        </Logo>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #202020;
  color: #fff;
`;

const Wrapper = styled.div`
  padding: 1.8rem 2.6rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Img = styled.img`
  height: 2.5rem;
`;

export default Menu;
