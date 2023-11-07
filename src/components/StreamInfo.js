import React from "react";

import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";

import {
  Stat,
  Featured,
  FeaturedItem,
  FeaturedTitle,
  FeaturedName,
  Hr,
} from "../components/style";

function StreamInfo() {
  return (
    <Stat className="">
      <Featured className="gap-10 flex justify-center items-center ">
        <FeaturedItem className="">
          <VideoSettingsIcon style={{ fontSize: "4rem" }} />
          <FeaturedName id="status">Playing</FeaturedName>
          <Hr />
          <FeaturedTitle>Player State</FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
          <CenterFocusWeakIcon style={{ fontSize: "4rem" }} />
          <FeaturedName id="streamName">Stream-XYZ</FeaturedName>
          <Hr />
          <FeaturedTitle>Current Stream</FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
          <AspectRatioIcon style={{ fontSize: "4rem" }} />
          <FeaturedName id="resolution">000x000</FeaturedName>
          <Hr />
          <FeaturedTitle>Resolution</FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
          <NetworkCheckIcon style={{ fontSize: "4rem" }} />
          <FeaturedName id="playLatency">0.00s</FeaturedName>
          <Hr />
          <FeaturedTitle>Play Latency</FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
          <AutoAwesomeMotionIcon style={{ fontSize: "4rem" }} />
          <FeaturedName id="framerate">0.00fps</FeaturedName>
          <Hr />
          <FeaturedTitle>Framerate</FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
          <GraphicEqIcon style={{ fontSize: "4rem" }} />
          <FeaturedName id="bitrate">0.000kbps</FeaturedName>
          <Hr />
          <FeaturedTitle>Bitrate</FeaturedTitle>
        </FeaturedItem>
      </Featured>
    </Stat>
  );
}

export default StreamInfo;
