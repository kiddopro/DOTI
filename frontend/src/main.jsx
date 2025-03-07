// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
