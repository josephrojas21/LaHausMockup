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
    border: 2px solid #005e14 !important;
    border-radius: 3rem !important;

  }

  .ant-select-selection-placeholder{
    color: #005e14 !important;
    font-weight: 600 !important;
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