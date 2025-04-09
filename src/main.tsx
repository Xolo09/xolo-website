import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WalletConnectionProvider } from "./contexts/WalletConnectionProvider";

// Simple error boundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("React error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Something went wrong.</h2>
        <p>Please refresh the page or try again later.</p>
      </div>;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <WalletConnectionProvider>
        <App />
      </WalletConnectionProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
