import styled from 'styled-components';
import { LeftOutlined } from '@ant-design/icons';
import { Image } from "antd";

export const WrapperHeader = styled.div`
    height: 100%;
    display: flex;
`;

export const ButtonBack = styled(LeftOutlined)`
    border: 1px solid #F0F0F0;
    padding: 1rem;
    border-radius: 5rem;
    width: 38px;
    height: 38px;
    align-self: center;
    box-shadow: 1px 1px 4px 2px #F0F0F0;
`;

export const  ImageHeader = styled(Image)`
  align-self: center;
  margin: 0 3rem;
  padding: 1rem 0px;
`;

export const TitleHeader = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  div{
    display: flex;
  }

  .city {
    font-weight: 400;
  }

  h3 {
    margin-top: 2rem;
    line-height: 0rem;
  }

  p{
    font-weight: 300;
    margin: 0;
    font-size: 1.2rem;
    line-height: 4;
  }

`;