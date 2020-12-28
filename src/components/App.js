import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import mixesJSON from "../data/mixes.json";
import Header from "./Header";

function App() {
  const [filter, setFilter] = useState();
  const [mixes, setMixes] = useState(mixesJSON);

  useEffect(() => {
    if (filter) {
      let updatedMixes = mixes.filter(
        (mix) =>
          mix.headlineFont.type === filter && mix.paragraphFont.type === filter
      );
      setMixes(updatedMixes);
    } else {
      setMixes(mixesJSON);
    }
  }, [filter, mixes]);

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <FilterWrapper>
          <Filter onClick={() => setFilter("")}>All</Filter>
          <Filter onClick={() => setFilter("sans-serif")}>Sans-serif</Filter>
          <Filter onClick={() => setFilter("sans-serif")}>Serif</Filter>
        </FilterWrapper>
        <CardWrapper>
          {mixes.map((mix) => (
            <Card
              headlineFont={mix.headlineFont}
              paragraphFont={mix.paragraphFont}
            />
          ))}
        </CardWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  margin: 40px auto;
  max-width: 1200px;
`;

const FilterWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  margin: 0px auto;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, 100px);
`;

const Filter = styled.button`
  border: none;
  background-color: #dee2e6;
  color: #212529;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 10px;

  &:hover {
    background-color: #ced4da;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  margin: 40px auto;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, 330px);
`;

export default App;
