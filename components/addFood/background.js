import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-position: center;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.21);
`;

const Background = ({
  img = 'https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg',
}) => (
  <Container style={{ background: `url(${img})` }}>
    <Cover />
  </Container>
);

export default Background;
