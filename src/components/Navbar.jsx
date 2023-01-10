import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  const { user } = useSelector(state => ({ ...state.user }));

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type='search' placeholder='Search' />
          <SearchOutlinedIcon />
        </Search>
        {user ? (
          <User>
            <VideoCallOutlinedIcon />
            <Avatar />
            {user.username}
          </User>
        ) : (
          <Link to='signin' style={{ textDecoration: 'none' }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 5.6rem;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 2rem;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  display: inline-block;
  width: 100%;
  font-family: inherit;
  background-color: transparent;
  caret-color: #ccc;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  background-color: #999;
  border-radius: 50%;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Navbar;
