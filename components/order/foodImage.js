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

const FoodImage = ({ img = null }) => (
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
