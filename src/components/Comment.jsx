import styled from 'styled-components';

const Comment = () => {
  return (
    <Container>
      <Avatar
        src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo'
        alt=''
      />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptatibus a
          voluptatum inventore soluta similique, ullam, ipsum perferendis expedita provident nemo.
          Voluptas voluptate est temporibus, dolorum cumque iusto voluptates mollitia?
        </Text>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
`;

const Date = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 0.5rem;
`;

const Text = styled.span`
  font-size: 1.4rem;
`;

export default Comment;
