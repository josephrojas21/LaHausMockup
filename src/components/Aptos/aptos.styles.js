import styled from "styled-components";
import { Card } from "antd";
import ScrollContainer from "react-indiana-drag-scroll";

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
  margin-right: 2rem;

  span, p {
    text-align: center;
  }

  p {
    font-size: 2.2rem;
    line-height: 1;
    margin: 0;
  }
`;

export const CardApto = styled(Card)`
  border-radius: .5rem;
  margin: 0 0.5rem;
  min-width: 10rem;

  .ant-card-head {
    padding: 0 !important;
    background: ${(props) =>
      props.backgroundColor === "DISPONIBLE"
        ? "#C1FBF5"
        : props.backgroundColor === "OPCIONADO"
        ? "#FFE7B6"
        : "#fbc1c1"} !important;
    text-align: center !important;
    font-size: 1rem !important;
    border-radius: .5rem .5rem 0 0 !important;
    min-height: unset;
  }

  .ant-card-head-title{
    padding: 5px 0 !important;
  }

  .ant-card-body {
    padding: 5px 15px;
  }

  p {
    margin: 8px;
  }

  .tipoApto{
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 2rem;
    font-size: 11px;
  }
`;
