import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Heading>
        font<Span>mix</Span>
      </Heading>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: #212529;
  height: 70px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  color: #f8f9fa;
  font-size: 2rem;
  font-family: "Roboto Bold", sans-serif;
  letter-spacing: -1px;
  padding: 10px 30px;
`;

const Span = styled.span`
  color: #f8f9fa;
`;

export default Header;
