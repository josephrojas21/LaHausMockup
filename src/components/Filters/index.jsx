import React, { useState } from "react";
//styles
import { WrapperData, WrapperFilters, SelectInput, Info, ButtonFilter } from "./filters.styles";

//libreries
import { Select } from "antd";

const { Option } = Select;

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
    <>
      <WrapperData>
        <SelectInput
          showSearch
          style={{ width: 200 }}
          placeholder="Selecciona torre"
          optionFilterProp="children"
        >
          <Option value="torre1">Torre 1</Option>
          <Option value="torre2">Torre 2</Option>
          <Option value="torre3">Torre 3</Option>
        </SelectInput>
        <Info>
          <span>Fase &middot;</span>
          <span>
            <strong>Preventa</strong>
          </span>
        </Info>
        <Info>
          <span>Etapa &middot;</span>
          <span>
            <strong>1</strong>
          </span>
        </Info>
        <Info>
          <span>Aptos &middot;</span>
          <span>
            <strong>45</strong>
          </span>
        </Info>
      </WrapperData>
      <WrapperFilters>
        { filters.map((d, index) => (
        <ButtonFilter key={index} type="primary" shape="round" size={'large'}>
          {d}
        </ButtonFilter>
        ))}

      </WrapperFilters>
    </>
  );
};

export default Index;
