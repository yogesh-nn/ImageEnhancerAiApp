import React from "react";

const ImageUpload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.uploadedImageHandler(file);
    }
  };

  return (
    <div className="bg-gray-300 mt-5 rounded-4xl mb-10 font-bold tracking-tighter text-center w-1/3 text-blue-950 px-3 py-2 border-white">
      <label
        htmlFor="fileInput"
        className="border-2 border-dashed border-slate-400 p-8 m-2 text-center font-mono text-xl rounded-4xl cursor-pointer hover:border-yellow-800 transition-all block"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />
        <p className="text-slate-700 italic font-light">
          Click or Drag to upload the image...
        </p>
      </label>
    </div>
  );
};

export default ImageUpload;
