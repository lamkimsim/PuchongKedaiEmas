import React from "react";
import { Input, AutoComplete } from "antd";
import { CodeSandboxOutlined } from "@ant-design/icons";

const SearchBar = () => {
  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>
          <CodeSandboxOutlined /> {count}
        </span>
      </div>
    ),
  });
  const options = [
    {
      options: [renderItem("Necklace", 100), renderItem("AntDesign UI", 10600)],
    },
  ];
  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{
        width: 350,
      }}
      options={options}
    >
      <Input.Search size="large" placeholder="Search Products..." />
    </AutoComplete>
  );
};

export default SearchBar;
