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
        src="https://demo.nanocosmos.de/nanoplayer/embed/1.3.3/nanoplayer.html?group.id=f39ebb0e-54e9-426f-908f-540925d2a58b&options.adaption.rule=deviationOfMean2&startIndex=0&playback.latencyControlMode=classic"
      ></iframe>
    </div>
  );
}

export default LiveStreamFrame;
