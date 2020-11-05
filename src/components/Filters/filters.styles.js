import styled from 'styled-components';
import { Select, Button } from "antd";

export const WrapperData = styled.div`
  display: grid;
  border-bottom: 1px solid #F0F0F0;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 2rem 4rem;


  @media only screen and (min-width: 500px) and (max-width: 950px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 951px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SelectInput = styled(Select)`
  .ant-select-selector {
    border: 1.4px solid #005e14;
    border-radius: 3rem;
  }
`;  

export const Info = styled.div`
  strong {
    color: #005e14;
  }

  span:last-child {
    margin-left: 1rem;
  }
`;

export const WrapperFilters = styled(WrapperData)`
   border-bottom: none;
  grid-template-columns: repeat(2, 1fr);


  @media only screen and (min-width: 500px) and (max-width: 950px){
    grid-template-columns: repeat(4, 1fr);
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