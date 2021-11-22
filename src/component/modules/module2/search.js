import "../search.sass";

let options = [
  { id: 1, value: "XL", com: "DisplayXl" },
  { id: 2, value: "2XL", com: "DisplayDoubleXl" },
  { id: 3, value: "4L", com: "DisplayFourL" },
  { id: 4, value: "XL/2L", com: "DisplayXll" },
  { id: 5, value: "XL/L/2SM", com: "DisplayXllSM" },
];

const Search = (props) => {
  const displayOption = () => {
    return options.map((item) => (
      <option key={item.id} value={item.com}>
        {item.value}
      </option>
    ));
  };

  return (
    <div className="search-box">
      <select id="browsers" onChange={(e) => props.DataList(e)}>
        <option value="">please select layout</option>
        {displayOption()}
      </select>
    </div>
  );
};

export default Search;
