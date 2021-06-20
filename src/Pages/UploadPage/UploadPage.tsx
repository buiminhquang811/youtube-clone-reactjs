import React, { useState } from "react";
import "./UploadPage.css";
import CloseIcon from "@material-ui/icons/Close";
import UploadVideoForm from "./UploadVideoForm";

const UploadPage: React.FC = () => {
  const [fileSelected, setFileSelected] = useState(null);

  return (
    <div className="UploadPage">
      <div className="SelectFileContainer">
        <div className="topSection">
          <div className="leftSide">
            <h2>Upload Video</h2>
          </div>
          <div className="rightSide">
            <CloseIcon id="closeIcon" />
          </div>
        </div>
        <div className="body" id={fileSelected ? "Selected" : ""}>
          {fileSelected == null ? (
            <>
              <h4>Upload A Video From Your Computer</h4>
              <input
                type="file"
                id="uploadInput"
                accept="video/mp4"
                style={{ display: "none" }}
                onChange={(e) => { setFileSelected(e.target.files as any) }}
              />
              <div id="uploadButton">
                <label htmlFor="uploadInput">SELECT FILE</label>
              </div>
            </>
          ) : (
            <UploadVideoForm fileSelected={fileSelected} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;