import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 40vh;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.21);
`;

const Background = ({ img = '' }) => {
  const router = useRouter();
  const { STOR_CD, MENU_CD } = router.query;

  return (
    <Container img={`/images/food/${STOR_CD}/${MENU_CD}.jpg`}>
      <Cover />
    </Container>
  );
};

export default Background;
