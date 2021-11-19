import React from "react";
import { saveAs } from "file-saver";

function Resume() {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1cNNil3yfuB3Ua_WcAJZzB70ppECOmSHC/view",
      "example_resume.pdf"
    );
  };
  return (
    <div>
      <h2>Resume</h2>
      <button onClick={saveFile}>download</button>
      <p>Skills</p>
    </div>
  );
}

export default Resume;