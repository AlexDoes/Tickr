import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import DotaMap from "../assets/dotaMap.jpg";

const normalizeCoordinate = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const calculateIntensity = (x, y, event, radius) => {
  const dx = x - event.x;
  const dy = y - event.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < radius) {
    return (radius - distance) / radius;
  }
  return 0;
};

const Heatmap = ({ incomingEvent }) => {
  const canvasRef = useRef(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (incomingEvent) {
      const normalizedX = normalizeCoordinate(incomingEvent.x, -8000, 8000, 0, 1000);
      const normalizedY = normalizeCoordinate(incomingEvent.y, -8000, 8000, 0, 1000);
      setEvents((prevEvents) => [...prevEvents, { ...incomingEvent, x: normalizedX, y: normalizedY }]);
    }
  }, [incomingEvent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = 1000;
    const height = 1000;
    const radius = 50;

    // Set canvas dimensions only once
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const colorScale = d3.scaleSequential(d => d3.interpolate(`rgba(0, 0, 255, ${d})`, `rgba(255, 0, 0, ${d})`)(d)).domain([0, 2]);

;

    if (events.length > 0) {
      const lastEvent = events[events.length - 1];
      const xMin = Math.max(0, lastEvent.x - radius);
      const xMax = Math.min(width, lastEvent.x + radius);
      const yMin = Math.max(0, lastEvent.y - radius);
      const yMax = Math.min(height, lastEvent.y + radius);

      for (let x = xMin; x <= xMax; x++) {
        for (let y = yMin; y <= yMax; y++) {
          const intensity = calculateIntensity(x, y, lastEvent, radius);
          const color = d3.color(colorScale(intensity));
          const imageData = ctx.getImageData(x, y, 1, 1);
          const data = imageData.data;

          // Blend the new color with the existing one
          data[0] = Math.min(255, data[0] + color.r);
          data[1] = Math.min(255, data[1] + color.g);
          data[2] = Math.min(255, data[2] + color.b);
          data[3] = Math.min(255, data[3] + Math.floor(intensity * 255 / 2));

          ctx.putImageData(imageData, x, y);
        }
      }
    }
  }, [events]);

  return (
    <div className="map-container w-full h-full min-w-[200px] min-h-[200px]">
      <img src={DotaMap} alt="Dota 2 Map" className="dota2-map w-full h-full min-w-[200px] min-h-[200px]" />
      <canvas ref={canvasRef} className="heatmap-layer w-full h-full min-w-[200px] min-h-[200px]"></canvas>
    </div>
  );
};

export default Heatmap;
