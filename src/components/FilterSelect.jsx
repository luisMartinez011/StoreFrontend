import Select from "react-select";
import { products } from "../utils/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../app/actions/categoryActions";

// const options = [
//     { value: "sofa", label: "Sofa" },
//     { value: "chair", label: "Chair" },
//     { value: "watch", label: "Watch" },
//     { value: "mobile", label: "Mobile" },
//     { value: "wireless", label: "Wireless" },
// ];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
    margin: "auto",
    textAlign: "center",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const [option, setOptions] = useState([]);
  const dispatch = useDispatch();
  const categoriesSelector = useSelector((state) => state.category.data);

  const handleChange = (selectedOption) => {
    setFilterList(
      products.filter((item) => item.category === selectedOption.value)
    );
  };

  useEffect(() => {
    dispatch(getCategories());
    // const response = getCategories();
    const cambios = [];
    categoriesSelector.forEach((data) => {
      cambios.push({
        title: data.title,
        label: data.title,
      });
    });
    // updating state
    setOptions(cambios);
  }, []);

  return (
    <Select
      options={option}
      defaultValue={{ value: "", label: "Categoria" }}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default FilterSelect;
