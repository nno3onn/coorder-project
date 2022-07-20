import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-contents: center;
`;

const Button = styled.div`
  color: white;
  background-color: '#f96421';
  padding: 20px 60px;
`;

const AddButton = () => (
  <Wrapper>
    <Button>주문하기</Button>
  </Wrapper>
);

export default AddButton;
