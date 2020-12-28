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
  align-items: center;
  background-color: #212529;
  display: flex;
  height: 70px;
`;

const Heading = styled.h1`
  color: #f8f9fa;
  font-family: "Roboto Bold", sans-serif;
  font-size: 2rem;
  letter-spacing: -1px;
  padding: 10px 30px;
`;

const Span = styled.span`
  color: #f8f9fa;
`;

export default Header;
