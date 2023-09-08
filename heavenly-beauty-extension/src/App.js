import logo from './logo.svg';
import './App.css';
import WebSocketDataDiv from './WebSocketDataDiv/websocketdatadiv';
import DotaMapComponent from './DataVisualization/DotaMapComponent';

function App() {
  return (
    <>
      <WebSocketDataDiv />
      <DotaMapComponent />
    </>
  );
}

export default App;
