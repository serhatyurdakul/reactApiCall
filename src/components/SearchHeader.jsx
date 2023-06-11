import { useState } from "react";
function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();

    search(valueInput);
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="search-div">
      <form onSubmit={handleFormSubmit}>
        <label>What are you looking for?</label>
        <input type="text" value={valueInput} onChange={handleChange} />
        <div>{valueInput}</div>
      </form>
    </div>
  );
}

export default SearchHeader;
