import React from "react";
import { TorrePisos } from './../../data/db'
// styles
import { WrapperAptos, RowDiv, FloorDiv, CardApto } from "./aptos.styles";



const Index = () => {
  const data = TorrePisos;

  return (
    <WrapperAptos>
      {data.map((d) => (
        <RowDiv key={d.piso}>
          <FloorDiv>
            <span>Piso</span>
            <p><strong>{d.piso}</strong></p>
          </FloorDiv>
          {d.aptos.map(( i) => (
            <CardApto key={i.num} title={i.estado} bordered={false} backgroundColor={i.estado} >
              <p className="numApto"><strong>{i.num}</strong></p>
              <p className="areaApto">{i.area} m<sup>2</sup></p>
              <p className="tipoApto">{i.tipo}</p>
            </CardApto>
          ))}
        </RowDiv>
      ))}
    </WrapperAptos>
  );
};

export default Index;
