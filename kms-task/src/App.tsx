import React, { Suspense } from "react";
import Login from "./modules/Login";
import Routes from "./routes/routes";
function App() {
  return (
    <div className="App">
      <Suspense fallback={""}>
        <Routes />
      </Suspense>
      
    </div>
  );
}

export default App;
