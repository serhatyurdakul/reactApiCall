function ImageItem({ imageProps }) {
  console.log(imageProps);
  return (
    <div>
      <img
        className="image-list-img"
        src={imageProps.urls.small}
        alt={imageProps.alt_description}
      />
    </div>
  );
}

export default ImageItem;
