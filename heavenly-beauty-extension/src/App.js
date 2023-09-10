import "./App.css";
import WebSocketDataDiv from "./WebSocketDataDiv/websocketdatadiv";
import Dashboard from "./Dashboard/DashboardComponent";import DotaMapComponent from './DataVisualization/DotaMapComponent';
import React, { useState, useEffect } from 'react';
import Heatmap from './DataVisualization/Heatmap';

function App() {
  const [incomingEvent, setIncomingEvent] = useState(null);
  const eventTypes = ['death', 'goal', 'assist'];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Simulate receiving a new event
  //     const newEvent = {
  //       x: Math.floor(Math.random() * 1000),
  //       y: Math.floor(Math.random() * 1000),
  //       eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)]
  //     };
  //     setIncomingEvent(newEvent);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const [event, setEvent] = useState(null);

  // Array of possible event types

  // Test setup to generate random events
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Generate random coordinates
  //     const x = Math.floor(Math.random() * 500);
  //     const y = Math.floor(Math.random() * 500);

  //     // Generate a random event type from the array
  //     const randomIndex = Math.floor(Math.random() * eventTypes.length);
  //     const eventType = eventTypes[randomIndex];

  //     // Create the new event
  //     const newEvent = { x, y, eventType };

  //     // Update state to trigger heatmap update
  //     setEvent(newEvent);
  //   }, 1000);  // Generates a new event every 1 second

    // Cleanup: Clear interval when component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <div className=" fixed w-[100vw] h-[20vh] border-2 border-green-700 z-100 overflow-visible">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
