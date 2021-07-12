import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: absolute;
  top: 5%;
  text-align: center;
`;

const Title = styled.h1`
  color: black;
  font-size: 48px;
`;

const Subtitle = styled.h2`
  color: rgb(10, 70, 228);
  font-size: 48px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>High fortune</Title>
      <Subtitle>w/ Dree Low</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
