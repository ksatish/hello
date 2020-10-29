import React from "react";
import { ReactMic } from "@cleandersonlobo/react-mic";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobURL: "",
    };
  }

  startRecording = () => {
    this.setState({
      record: true,
    });
  };

  stopRecording = () => {
    this.setState({
      record: false,
    });
  };

  onData(recordedBlob) {
    //console.log("chunk of real-time data is: ", recordedBlob);
  }
  
  blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob.blob);
    console.log("recordedBlob is: ", recordedBlob.blobURL); 
    //First way to pass data to API
    var file = new File([recordedBlob], "recorded_file.wav", { type: recordedBlob.blob.type, lastModified: new Date() });
    console.log("File : ", file);
    //Another way by convrting blob to base16
    this.blobToBase64(recordedBlob.blob).then(res => {
      // do what you wanna do
      console.log(res); // res is base64 now
    });
    this.setState({
      blobURL: recordedBlob.blobURL,
   });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <div style={{display:"flex"}}>
          <button onClick={this.startRecording} type="button">
            Start
          </button>
          <button onClick={this.stopRecording} type="button">
            Stop
          </button>
        </div>
        <audio src={this.state.blobURL} controls="controls" />
      </div>
    );
  }
}
