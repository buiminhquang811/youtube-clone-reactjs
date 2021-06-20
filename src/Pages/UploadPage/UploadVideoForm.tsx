import React, { useState } from 'react';
import './UploadPage.css';
import Axios from 'axios';

interface Props {
  fileSelected: any,
}

const UploadVideoForm: React.FC<Props> = ({ fileSelected }) => {

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbmail] = useState([]);

  const submitVideo = () => {
    const thumbFormData = new FormData();
    thumbFormData.append("file", thumbnail[0]);
    thumbFormData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET as string);

    Axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, thumbFormData).then((response) => {
      Axios.post("http://localhost:3001/upload", {
        title: title,
        description: description,
        channelName: "QuangBui",
        thumbnailUrl: response.data.public_id,
        videoPathname: fileSelected[0].name,
      }).then(() => {
        const videoFormData = new FormData()
        videoFormData.append('video', fileSelected[0])
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        Axios.post('http://localhost:3001/upload/video', videoFormData, config).then((response) => {
          console.log("Video Uploaded Correctly")
        }).catch((err) => {
          console.log(err)
        })
      })
    });
    // VIDEO LOGIC
  }

  return (
    <div className="UploadVideoContainer">
      <div className="titleContainer">
        <label>Title:</label>
        <input type="text" placeholder="Title..."
          onChange={(e) => { setTitle(e.target.value) }} />
      </div>

      <div className="descriptionContainer">
        <label>Description:</label>
        <textarea placeholder="Description..."
          onChange={(e) => { setDescription(e.target.value) }} />
      </div>
      <div className="bottomSection">
        <div className="thumbnailContainer">
          <input
            type="file"
            id="uploadThumbnail"
            style={{ display: "none" }}
            onChange={(e) => setThumbmail(e.target.files as any)}
          />
          <div id="uploadThumbnail">
            <label htmlFor="uploadThumbnail"> - Select - </label>
          </div>
        </div>
        <div className="uploadButtonContainer">
          <button onClick={submitVideo}> Upload Video</button>
        </div>
      </div>
    </div>
  )
}

export default UploadVideoForm