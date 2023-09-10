import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
 

const calculateIntensity = (x, y, events, radius) => {
  let intensity = 0;
  events.forEach(event => {
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
      setEvents(prevEvents => [...prevEvents, incomingEvent]);

      setPopups(prevPopups => [
        ...prevPopups,
        {
          x: incomingEvent.x,
          y: incomingEvent.y,
          eventType: incomingEvent.eventType,
          timestamp: Date.now(),
        }
      ]);

      setTimeout(() => {
        setPopups(prevPopups => prevPopups.filter(popup => popup.timestamp !== incomingEvent.timestamp));
      }, 2000);
    }
  }, [incomingEvent]);

  useEffect(() => {
    // console.log(incomingEvent);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = 1000;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    const radius = 50;
    const colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 2]);

    ctx.clearRect(0, 0, width, height);

    for (let x = 0; x <= width; x++) {
      for (let y = 0; y <= height; y++) {
        const intensity = calculateIntensity(x, y, events, radius);
        const color = d3.color(colorScale(intensity));
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${intensity / 2})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, [events]);

  return (
    <div className="map-container">
    <img src="dotaMap.jpg" alt="Dota 2 Map" className="dota2-map" />
    <canvas ref={canvasRef} className="heatmap-layer"></canvas>
    {popups.map((popup, index) => (
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
    ))}
  </div>
  );
};

export default Heatmap;
