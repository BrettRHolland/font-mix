import styled from "styled-components";

function Tag({ font }) {
  return (
    <Wrapper font={font ? font : null}>
      <Link href={font.link} target="_blank" rel="noopener noreferrer">
        {font.name ? font.name : null}
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  background-color: #dee2e6;
  color: #212529;
  font-family: ${(props) =>
    props.font ? `${props.font.name}, ${props.font.type}` : null};
  font-size: 0.75rem;
  line-height: 1;
  margin-bottom: 1px;

  &:hover {
    background-color: #ced4da;
  }
`;

const Link = styled.a`
  color: #212529;
  display: block;
  padding: 8px 10px;
  text-decoration: none;
  width: 100%;
`;

export default Tag;
