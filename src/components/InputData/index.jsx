import React from "react";
//styles
import { WrapperData, SelectInput, Info } from "./inputData.styles";

//libreries
import { Select } from "antd";

const { Option } = Select;

const Index = () => {
  return (
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
  );
};

export default Index;
