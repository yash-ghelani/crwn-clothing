import styled from "styled-components";

export const CheckoutProductsContainer = styled.div`
  padding-top: 40px;
  width: 90%;
  margin: auto;
  max-width: 1200px;
  margin-bottom: 40px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CheckoutColumnTitles = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColumnTitle = styled.div`
  width: 20%;
  text-align: center;
`;

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 4vh;
  margin: 20px 3%;
`;

export const PaymentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 3%;
`;

export const Break = styled.hr`
  width: 100%
`;
