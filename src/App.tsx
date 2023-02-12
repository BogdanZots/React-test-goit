import React, { useEffect } from "react";
import "./App.css";
import RepositoriesContainer from "./containers/RepositoriesContainer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RepositoriesContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
