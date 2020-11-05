import Reactfrom from "react";
import { TorrePisos } from './../../data/db'
// styles
import { WrapperAptos, RowDiv, FloorDiv, CardApto } from "./aptos.styles";



const Index = () => {
  const data = TorrePisos;

  return (
    <WrapperAptos>
      {data.map((d) => (
        <RowDiv>
          <FloorDiv>
            <span>Piso</span>
            <span><strong>{d.piso}</strong></span>
          </FloorDiv>
          {d.aptos.map(( i) => (
            <CardApto title={i.estado} bordered={false} style={{ width: 100 }}>
              <p className="numApto">{i.num}</p>
              <p className="areaApto">{i.area} m</p>
              <p className="tipoApto">{i.tipo}</p>
            </CardApto>
          ))}
        </RowDiv>
      ))}
    </WrapperAptos>
  );
};

export default Index;
