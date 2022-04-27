import React, { useRef, useState, useEffect } from "react";
import "./Map.css";
import maplibregl from "maplibre-gl";
// import "../../preload/maplibre-preload.modern.js";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://demotiles.maplibre.org/style.json`,
      center: [lng, lat],
      zoom: zoom,
    });
    import("../../preload/maplibre-preload.modern.js");
  });

  const flyNow = () => {
    map.current.flyTo({
      center: [16.934403015268455, 52.4083352178382],
      zoom: 5,
      essential: true,
    });
  };

  const flyNowCached = () => {
    map.current.cachedFlyTo({
      center: [16.934403015268455, 52.4083352178382],
      zoom: 5,
      essential: true,
    });
  };

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={flyNow}
      >
        Fly To
      </button>
      <button
        style={{ position: "absolute", top: 0, left: 50 }}
        onClick={flyNowCached}
      >
        Fly To Cached
      </button>
    </div>
  );
};

export default Map;
