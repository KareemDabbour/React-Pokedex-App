import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = ({ onLookUp, search }) => {
  const [val, setVal] = useState(search);
  return (
    <div>
      <Search
        placeholder="Pokemon name: "
        defaultValue={search}
        enterButton="Search"
        size="large"
        onChange={(e) => setVal(e.target.value)}
        onClick={() => onLookUp(val)}
      />
    </div>
  );
};

export default SearchBox;
