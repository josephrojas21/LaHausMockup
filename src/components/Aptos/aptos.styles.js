import styled from 'styled-components';
import { Card } from 'antd';
import ScrollContainer from 'react-indiana-drag-scroll'



export const WrapperAptos = styled.div`
  padding: 2rem 4rem;
  
`;

export const RowDiv = styled(ScrollContainer)`
  display: flex;
  align-items: center;
  background: #f0f2f5;
  border-radius: 1rem;
  padding: 2rem 3rem; 
  margin: 2rem 0;
`;

export const FloorDiv = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    text-align: center;
  }
`;

export const CardApto = styled(Card)`
  border-radius: 1rem;
  margin: 0 .8rem;

  .ant-card-head {
    padding: 0 !important;
    background: aliceblue !important;
    text-align: center !important;
    font-size: 1.2rem !important;
  }

  .ant-card-body{
    padding: 5px 15px;
  }

  p {
    margin: 0;
  }
`;