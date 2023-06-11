import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 4dXhHPr-kwDExCyNW_9o-P2bHnmcxxm6P6xrLneMQYE",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
