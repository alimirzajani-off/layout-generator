import { Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

let options = [
  { id: 1, value: "XL", com: "DisplayXl" },
  { id: 2, value: "2XL", com: "DisplayDoubleXl" },
  { id: 3, value: "4L", com: "DisplayFourL" },
  { id: 4, value: "XL/2L", com: "DisplayXll" },
  { id: 5, value: "XL/L/2SM", com: "DisplayXllSM" },
];

const BSearch = (props) => {
  const displayOption = () => {
    return options.map((item) => (
      <Option key={item.id} value={item.com}>
        {item.value}
      </Option>
    ));
  };

  return (
    <Select defaultValue="" onChange={props.DataList}>
      <Option value="">please select layout</Option>
      {displayOption()}
    </Select>
  );
};

export default BSearch;
