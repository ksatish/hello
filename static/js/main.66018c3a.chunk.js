(this.webpackJsonpcoach=this.webpackJsonpcoach||[]).push([[0],{10:function(e,t,o){e.exports=o(20)},15:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(4),c=o.n(r),l=(o(15),o(5)),i=o(6),s=o(9),d=o(8),u=o(7),b=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(l.a)(this,o),(n=t.call(this,e)).startRecording=function(){n.setState({record:!0})},n.stopRecording=function(){n.setState({record:!1})},n.blobToBase64=function(e){var t=new FileReader;return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))},n.onStop=function(e){console.log("recordedBlob is: ",e.blob),console.log("recordedBlob is: ",e.blobURL);var t=new File([e],"recorded_file.wav",{type:e.blob.type,lastModified:new Date});console.log("File : ",t),n.blobToBase64(e.blob).then((function(e){console.log(e)})),n.setState({blobURL:e.blobURL})},n.state={record:!1,blobURL:""},n}return Object(i.a)(o,[{key:"onData",value:function(e){}},{key:"render",value:function(){return a.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},a.a.createElement(u.a,{record:this.state.record,className:"sound-wave",onStop:this.onStop,onData:this.onData,strokeColor:"#000000",backgroundColor:"#FF4081"}),a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("button",{onClick:this.startRecording,type:"button"},"Start"),a.a.createElement("button",{onClick:this.stopRecording,type:"button"},"Stop")),a.a.createElement("audio",{src:this.state.blobURL,controls:"controls"}))}}]),o}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.66018c3a.chunk.js.map