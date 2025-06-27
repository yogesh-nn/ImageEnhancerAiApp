import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl gap-4 w-full max-w-2xl font-semibold tracking-tighter text-center text-blue-950 mt-4">
      <div className="overflow-hidden shadow-lg bg-gray-600 text-white font-light font-mono rounded-lg h-80 object-cover flex flex-col">
        <p className="px-3 py-2 rounded">Original Image</p>

        {props.uploadedImage ? (
          <img
            src={props.uploadedImage}
            alt=""
            className="w-full h-full bg-gray-300"
          />
        ) : (
          <div>
            <p className="bg-amber-200 text-gray-900">
              No image selected
            </p>
          </div>
        )}
      </div>
      <div className="overflow-hidden shadow-lg bg-blue-400 text-zinc-900 font-light font-mono rounded-lg h-80 object-cover flex flex-col">
        <p className="px-3 py-2 rounded">Enhanced Image</p>

        {props.enhancedImage && !props.loading && (
          <img
            src={props.enhancedImage}
            alt=""
            className="w-full h-full bg-gray-300"
          />
        )}

        {props.loading ? (
          <Loading />
        ) : (
          <div>
            <p className="bg-amber-200">
              No image selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
