import React, { useState } from "react";
import { Input } from "antd";
import styles from "./SearchBox.module.scss";

const { Search } = Input;

const SearchBox = ({ onLookUp, search }) => {
  const [value, setValue] = useState(search);

  return (
    <div>
      <div className={styles.Container}>
        <Search
          placeholder="Pokemon name: "
          defaultValue={search}
          enterButton="Search"
          size="large"
          onChange={(e) => setValue(e.target.value)}
          onClick={() => onLookUp(value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
