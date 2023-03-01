import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  padding: 5px;
  justify-content: center;

  img {
    width: 70%;
  }
`;

export const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  cursor: pointer;
`;

export const Arrow = styled.span`
  cursor: pointer;
  margin: 0 7px;
`;
