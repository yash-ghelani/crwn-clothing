import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.span`
  font-size: 40px;
  text-decoration: solid;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding-bottom: 20px;
  overflow-x: auto;
`;
