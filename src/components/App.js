import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import mixesJSON from "../data/mixes.json";
import Header from "./Header";

function App() {
  const [filter, setFilter] = useState("");
  const [mixes, setMixes] = useState(mixesJSON);

  useEffect(() => {
    if (filter) {
      let updatedMixes = mixesJSON.filter(
        (mix) =>
          mix.headlineFont.type === filter && mix.paragraphFont.type === filter
      );
      setMixes(updatedMixes);
    } else {
      setMixes(mixesJSON);
    }
  }, [filter]);

  return (
    <Wrapper>
      <Header />
      <FilterWrapper>
        <Filter active={filter === ""} onClick={() => setFilter("")}>
          All
        </Filter>
        <Filter
          active={filter === "sans-serif"}
          onClick={() => setFilter("sans-serif")}
        >
          Sans-serif
        </Filter>
        <Filter active={filter === "serif"} onClick={() => setFilter("serif")}>
          Serif
        </Filter>
      </FilterWrapper>
      <ContentWrapper>
        <CardWrapper>
          {mixes.map((mix) => (
            <Card
              key={mix.headlineFont.name + mix.paragraphFont.name}
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
  background-color: #f8f9fa;
`;

const Filter = styled.button`
  background-color: ${(props) => (props.active ? "#dee2e6" : "#f8f9fa")};
  border: none;
  border-right: 1px solid #dee2e6;
  color: #212529;
  cursor: pointer;
  font-weight: bold;
  padding: 15px 25px;
  width: 120px;

  &:hover {
    background-color: #dee2e6;
  }

  &:focus {
    outline: none;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 330px);
  justify-content: center;
  margin: 40px auto;
  max-width: 1200px;
`;

export default App;
