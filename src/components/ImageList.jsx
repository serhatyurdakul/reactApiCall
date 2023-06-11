import ImageItem from "./ImageItem";

function ImageList({ imagesplaceholder }) {
  return (
    <div className="image-list">
      {imagesplaceholder.map((image, index) => {
        return <ImageItem imageProps={image} key={index} />;
      })}
    </div>
  );
}

export default ImageList;
