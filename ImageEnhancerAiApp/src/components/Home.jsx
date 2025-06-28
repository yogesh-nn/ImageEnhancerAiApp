import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhanceImageAPI";


const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadedImageHandler = async (file) => {
    setUploadedImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(enhancedImage);
  return (
    <>
      <ImageUpload uploadedImageHandler={uploadedImageHandler} />
      <ImagePreview
        uploadedImage={uploadedImage}
        enhancedImage={enhancedImage.image}
        loading={loading}
      />
    </>
  );
};

export default Home;
