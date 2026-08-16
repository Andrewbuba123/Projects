import ReactDOM from "react-dom/client";
import { MainPage } from "./components/MainPage/mainPage";

import "./main.css";
import { StrictMode } from "react";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Корневой элемент не найден");
}

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <StrictMode>  
    <MainPage />
  </StrictMode>,
);
