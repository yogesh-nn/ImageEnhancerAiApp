import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 text-white min-h-screen">
      <div className="text-5xl font-bold mb-4">
        <h1>Image Enhancer using AI</h1>
      </div>
      <h1 className="mb-3 font-mono">Upload your Image and let AI do some magic...</h1>
      <Home />
      <div className="text-gray-500 italic text-lg mt-4">
        <p>Powered by AI</p>
      </div>
    </div>
  );
}

export default App;
