import styled from 'styled-components';
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height='720'
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <ChannelDetail>
              <ChannelName>Lama Dev</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        {/* <Comments/> */}
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const VideoWrapper = styled.div`
  
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.8rem;
  text-transform: capitalize;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div``;

const Button = styled.div``;

const Content = styled.div`
  flex: 5;
`;

const Hr = styled.hr``;

const Channel = styled.div``;

const ChannelInfo = styled.div``;

const Image = styled.img``;

const ChannelDetail = styled.div``;

const ChannelName = styled.span``;

const ChannelCounter = styled.span``;

const Description = styled.p``;

const Subscribe = styled.button``;

const Recommendation = styled.div`
  flex: 2;
`;

export default Video;
