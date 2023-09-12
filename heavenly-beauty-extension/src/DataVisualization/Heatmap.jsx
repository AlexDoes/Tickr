import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import DotaMap from "../assets/dotaMap.jpg";
const normalizeCoordinate = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const calculateIntensity = (x, y, events, radius) => {
  let intensity = 0;
  events.forEach((event) => {
    const dx = x - event.x;
    const dy = y - event.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < radius) {
      intensity += (radius - distance) / radius;
    }
  });
  return intensity;
};

const Heatmap = ({ incomingEvent }) => {
  const canvasRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    if (incomingEvent) {
      // Normalize coordinates
      // console.log(incomingEvent, "INCOMING EVENT");
      const normalizedX = normalizeCoordinate(
        incomingEvent.x,
        -8000,
        8000,
        0,
        1000
      );
      const normalizedY = normalizeCoordinate(
        incomingEvent.y,
        -8000,
        8000,
        0,
        1000
      );

      setEvents((prevEvents) => [
        ...prevEvents,
        { ...incomingEvent, x: normalizedX, y: normalizedY },
      ]);

      // setPopups((prevPopups) => [
      //   ...prevPopups,
      //   {
      //     x: normalizedX,
      //     y: normalizedY,
      //     eventType: incomingEvent.eventType,
      //     timestamp: Date.now(),
      //   },
      // ]);

      // setTimeout(() => {
      //   setPopups((prevPopups) =>
      //     prevPopups.filter((popup) => Date.now() - popup.timestamp >= 2000)
      //   );
      // }, 2000);
    }
  }, [incomingEvent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = 1000;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    const radius = 100;
    const colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 2]);

    ctx.clearRect(0, 0, width, height);

    for (let x = 0; x <= width; x++) {
      for (let y = 0; y <= height; y++) {
        const intensity = calculateIntensity(x, y, events, radius);
        const color = d3.color(colorScale(intensity));
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${
          intensity * 0.8
        })`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, [events]);

  return (
    <div className="map-container w-full h-full  min-w-[200px] min-h-[200px]">
      <img
        src={DotaMap}
        alt="Dota 2 Map"
        className="dota2-map w-full h-full  min-w-[200px] min-h-[200px]"
      />
      <canvas
        ref={canvasRef}
        className="heatmap-layer w-full h-full min-w-[200px] min-h-[200px]"
      ></canvas>
      {/* {popups.map((popup, index) => (
        <div
          key={index}
          className="popup"
          style={{
            left: `${popup.x}px`,
            top: `${popup.y}px`,
          }}
        >
          {popup.eventType}
        </div>
      ))} */}
    </div>
  );
};

export default Heatmap;
