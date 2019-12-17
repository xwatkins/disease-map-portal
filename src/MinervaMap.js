import React, { useEffect, useRef } from "react";
import "./MinervaMap.css";

const serverUrl = "https://pdmap.uni.lu/minerva/";
const projectId = "pd_map_autumn_19";
const submapId = 4895;

const MinervaMap = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef !== null) {
      let elementId = "map";
      // eslint-disable-next-line no-undef
      createMap({ elementId, serverUrl, projectId, submapId });
    }
  }, []);

  return (
    <div className="App-column">
      <div id="map" className="map" ref={mapRef}></div>
    </div>
  );
};

export default MinervaMap;
