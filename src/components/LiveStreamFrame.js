import React from "react";

function LiveStreamFrame() {
  return (
    <div className="relative w-full pb-[50.625%]">
      <iframe
        //We'll use the padding bottom technique to maintain 16:9 ratio
        className=" absolute w-full h-full"
        allow="fullscreen"
        // width="1280"
        // height="720"
        src={process.env.REACT_APP_STREAM_URL}
      ></iframe>
    </div>
  );
}

export default LiveStreamFrame;
