import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.21);
`;

const FoodImage = ({
  img = 'https://food.fnr.sndimg.com/content/dam/images/food/products/2022/3/11/rx_goldbelly-clinton-street-diner-zeus-burger.jpg.rend.hgtvcom.406.305.suffix/1647019464547.jpeg',
}) => (
  <Container
    style={{
      background: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Cover />
  </Container>
);

export default FoodImage;
