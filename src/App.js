import React, { useState, useEffect } from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader size={30} color={"#F0FFFF"} loading={loading} />
      ) : (
        <PathfindingVisualizer></PathfindingVisualizer>
      )}
    </div>
  );
}

export default App;
