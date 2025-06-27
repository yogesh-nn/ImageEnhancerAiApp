import axios from "axios";

const API_KEY = "wxo9lcelbxx5uc8qu";
const BASE_URL = "https://techhk.aoscdn.com/";
export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image uploaded successfully, Task ID : ", taskId);

    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Enhanced Image Data: ", enhancedImageData);
  } catch (error) {
    console.log(error.message);
  }
};

const uploadImage = async (file) => {
  // code to upload the Image
  // "/api/tasks/visual/scale/" ----POST
  const formData = new FormData();
  formData.append("image_file", file);
  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale/`,
    formData,
    {
      header: {
        "Content-type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.taskId) {
    throw new Error("Failed to upload image!");
  }
  return data.data.taskId;
};

const fetchEnhancedImage = async (taskId) => {
  // code to fetch the enhanced Image
  // "/api/tasks/visual/scale/{task_id}"   -----GET

  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      header: {
        "Content-type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (data?.data?.image) {
    return data.data.image;
  } else {
    throw new Error("Failed to fetch the Enhanced Image!");
  }
};

const pollForEnhancedImage = async (taskId, retries = 0)=>{
    const result = await fetchEnhancedImage(taskId);

    if(result.state == 4){

        if(retries >= 20){
            throw new Error("Max tries reached, please try again later!");
        }
        await new Promise((resolve)=> setTimeout(resolve, 2000 ));
        return pollForEnhancedImage(taskId, retries+1);
    }
}