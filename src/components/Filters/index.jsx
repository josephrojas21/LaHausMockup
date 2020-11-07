import React, { useState } from "react";
//styles
import { WrapperFilters, ButtonFilter } from "./filters.styles";

const Index = () => {
  const [filters, setFilters] = useState([
    "Estado",
    "Precio",
    "Metros",
    "Habitaciones",
    "Piso",
    "Vista",
    "Tipo de Apto",
  ]);

  return (
    <WrapperFilters>
      {filters.map((d, index) => (
        <ButtonFilter key={index} type="primary" shape="round" size={"large"}>
          {d}
        </ButtonFilter>
      ))}
    </WrapperFilters>
  );
};

export default Index;
