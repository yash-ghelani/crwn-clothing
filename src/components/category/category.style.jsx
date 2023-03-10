import styled from "styled-components";

export const CategoryContainer = styled.div`
  max-width: 1000px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 50px;
  margin: 0 auto 25px auto;
`;

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 25px;
`;
