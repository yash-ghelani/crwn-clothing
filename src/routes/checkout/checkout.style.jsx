import styled from "styled-components";

export const CheckoutProductsContainer = styled.div`
  margin: auto;
  max-width: 700px;
`;

export const CheckoutColumnTitles = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColumnTitle = styled.div`
  padding: 5px;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 42px;
  margin: 20px 0;
`;

export const PaymentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
