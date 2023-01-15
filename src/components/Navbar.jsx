import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Search from './Search';
import Upload from './Upload';
import userDefaultImg from 'img/user-default.jpg';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { user } = useSelector((state) => ({ ...state.user }));

  return (
    <>
      <Container>
        <Wrapper>
          <Search />
          {user ? (
            <User>
              <VideoCallOutlinedIcon
                style={{ fontSize: '3rem' }}
                onClick={() => setOpen(false)}
              />
              <Avatar src={user.img} alt='' />
              {user.name}
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
      {!open && <Upload onClose={setOpen} />}
    </>
  );
};

const Container = styled.div`
  height: 5.6rem;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  z-index: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 2rem;
  position: relative;
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
