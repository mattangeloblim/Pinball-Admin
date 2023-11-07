import React from "react";

function LiveStreamFrame() {
  return (
    <div className="relative w-full pb-[50.625%] border-2 border-red-600">
      <iframe
        //We'll use the padding bottom technique to maintain 16:9 ratio
        className=" absolute w-full h-full"
        allow="fullscreen"
        // width="1280"
        // height="720"
        // src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=9b1e7c55-1db0-40e9-b443-07f0b5290dd3&options.adaption.rule=deviationOfMean2&startIndex=0&playback.latencyControlMode=classic"
      ></iframe>
    </div>
  );
}

export default LiveStreamFrame;
