import "./App.css";

import SearchHeader from "./components/SearchHeader";
import searchImages from "./components/Api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesplaceholder={images} />
    </div>
  );
}

export default App;
