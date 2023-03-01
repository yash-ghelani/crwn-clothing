import styled from "styled-components";
import { Button } from "@mui/material";

export const BaseButton = styled(Button)`
  && {
    min-width: 140px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Roboto Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    opacity: 0.9;
  }

  &&:hover {
    background-color: white;
    color: black;
    border: 0.5px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  && {
    background-color: #4285f4;
    color: white;
  }

  &&:hover {
    background-color: white;
    color: #4285f4;
    border: none;
    border: 0.5px solid #4285f4;
  }
`;

export const InvertedButton = styled(BaseButton)`
  && {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &&:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const PaymentButton = styled(BaseButton)`
  && {
    min-width: 90px;
    width: 200px;
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  border-top-color: #3f3f3f;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
