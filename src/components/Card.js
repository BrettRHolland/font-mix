import styled from "styled-components";
import Tag from "./Tag";

function Card({ headlineFont, paragraphFont }) {
  return (
    <Wrapper>
      <Headline font={headlineFont ? headlineFont : null}>
        Bollywood, Reeling From the Pandemic, Shifts to Streaming
      </Headline>
      <Paragraph font={paragraphFont ? paragraphFont : null}>
        India’s film industry, which relied on theatrical releases, is
        experimenting with going straight to streaming services such as Amazon,
        Netflix and Disney’s Hotstar.
      </Paragraph>
      <Tags>
        {headlineFont ? (
          <Tag font={headlineFont ? headlineFont : null} />
        ) : null}
        {paragraphFont ? (
          <Tag font={paragraphFont ? paragraphFont : null} />
        ) : null}
      </Tags>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f8f9fa;
  display: grid;
  grid-template-rows: (auto 1fr auto);
  padding: 40px;
`;

const Headline = styled.h2`
  font-family: ${(props) =>
    props.font ? `${props.font.name}, ${props.font.type}` : null};
  font-size: 1.75rem;
  line-height: 120%;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-family: ${(props) =>
    props.font ? `${props.font.name}, ${props.font.type}` : null};
  font-size: 1rem;
  line-height: 140%;
`;

const Tags = styled.ul`
  list-style-type: none;
  margin-top: 32px;
`;

export default Card;
