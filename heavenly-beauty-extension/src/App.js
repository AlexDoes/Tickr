import logo from "./logo.svg";
import "./App.css";
import WebSocketDataDiv from "./WebSocketDataDiv/websocketdatadiv";
import Dashboard from "./Dashboard/DashboardComponent";
function App() {
  return (
    <>
      <div className="absolute w-[100vw] h-[20vh] border-2 border-green-700 z-100">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
