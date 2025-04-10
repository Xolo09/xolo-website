// src/main.tsx
import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Comment out the wallet provider import
// import { WalletConnectionProvider } from "./contexts/WalletConnectionProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Remove the wallet provider temporarily */}
    {/* <WalletConnectionProvider> */}
    <App />
    {/* </WalletConnectionProvider> */}
  </React.StrictMode>
);
// Add this at the top of main.tsx
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

// Wrap your ReactDOM.render in a try/catch
try {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      {/* Remove the wallet provider temporarily */}
      {/* <WalletConnectionProvider> */}
      <App />
      {/* </WalletConnectionProvider> */}
    </React.StrictMode>
  );
  console.log("React rendering completed");
} catch (error) {
  console.error("Error during React initialization:", error);
}
