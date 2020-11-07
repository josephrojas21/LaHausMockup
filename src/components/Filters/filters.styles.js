import styled from 'styled-components';
import {  Button } from "antd";



export const WrapperFilters = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem 4rem;

  @media only screen and (min-width: 450px) and (max-width: 620px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 621x) and (max-width: 950px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 951px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const ButtonFilter = styled(Button)`
  background: transparent;
  color: #333333;
  border-color: #F0F0F0;
`;