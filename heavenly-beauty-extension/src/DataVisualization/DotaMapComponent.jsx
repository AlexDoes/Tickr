import React from "react";
// import DotaMap from "../../public/dotaMap.jpg"
import * as d3 from "d3";
import { useEffect, useRef } from "react";

const sampleData = [
    [50, 50],
    [70, 80],
    [120, 100],
    [200, 50],
  ];
  const events = [
    { x: 50, y: 50, type: 'death' },
    { x: 200, y: 200, type: 'death' },
    { x: 50, y: 50, type: 'death' },
    { x: 50, y: 55, type: 'death' },
    { x: 55, y: 50, type: 'death' },
    { x: 60, y: 50, type: 'death' },
    { x: 50, y: 58, type: 'death' },
    { x: 50, y: 70, type: 'death' },

  ];

const DotaMapComponent = () => {
  const mapContainer = useRef(null);
  const canvasRef = useRef(null);

  const gridSize = 10;
  const radius = 20;
  const rows = 50;
  const cols = 50;

  // const grid = generateGrid(events, gridSize, rows, cols);
  // const radius = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = 500;
    const height = 500;
    canvas.width = width;
    canvas.height = height;

    // const events = [
    //   { x: 75, y: 75, type: 'death' },
    //   { x: 100, y: 100, type: 'death' },
    //   { x: 45, y: 55, type: 'death' },
    //   { x: 55, y: 45, type: 'death' },
    //   { x: 70, y: 60, type: 'death' },
    //   { x: 80, y: 50, type: 'death' },
    //   { x: 60, y: 55, type: 'death' },
    //   { x: 90, y: 70, type: 'death' },
    //   { x: 120, y: 120, type: 'death' },
    //   { x: 40, y: 40, type: 'death' },
    //   { x: 65, y: 65, type: 'death' },
    //   { x: 75, y: 55, type: 'death' },
    //   { x: 55, y: 75, type: 'death' },
    //   { x: 70, y: 90, type: 'death' },
    //   { x: 85, y: 45, type: 'death' },
    //   { x: 55, y: 60, type: 'death' },
    //   { x: 95, y: 80, type: 'death' },
    //   { x: 130, y: 130, type: 'death' },
    //   { x: 35, y: 35, type: 'death' },
    //   { x: 70, y: 70, type: 'death' }
    // ];
    const events = createDataPoints();

    const radius = 20;
    const colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 2]);

    for (let x = 0; x <= width; x++) {
      for (let y = 0; y <= height; y++) {
        const intensity = calculateIntensity(x, y, events, radius);
        const color = d3.color(colorScale(intensity));
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${intensity / 2})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }

  }, []);
  const createDataPoints = () => {
    const events = [];
    for (let i = 0; i < 300; i++) {
      const x = Math.floor(Math.random() * 501);  
      const y = Math.floor(Math.random() * 501); 
      events.push({ x, y, type: 'death' });
  }
  return events;

  }
  // function generateGrid(events, gridSize, rows, cols) {
  //   const grid = [];
  //   for(let i = 0; i < rows; i++) {
  //     for(let j = 0; j < cols; j++) {
  //       const point = { x: i * gridSize, y: j * gridSize, count: 0 };
  //       events.forEach(event => {
  //         const dx = event.x - point.x;
  //         const dy = event.y - point.y;
  //         const distance = Math.sqrt(dx * dx + dy * dy);
  
  //         if (distance < gridSize) {
  //           point.count++; 
  //         }
  //       });
  //       grid.push(point);
  //     }
  //   }
  //   return grid;
  // }
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
  
  // function calculateHeat(point, events, radius) {
  //   let heat = 0;
  //   events.forEach(event => {
  //     const dx = event.x - point.x;
  //     const dy = event.y - point.y;
  //     const distance = Math.sqrt(dx * dx + dy * dy);
  
  //     if (distance < radius) {
  //       heat += (radius - distance) / radius;
  //     }
  //   });
  //   return heat;
  // }


    return (
      <div className="map-container">
        <img src="dotaMap.jpg" alt="Dota 2 Map" className="dota2-map" />
        <canvas ref={canvasRef} className="heatmap-layer"></canvas>
      </div> 
    );
    }

export default DotaMapComponent;