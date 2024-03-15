import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import TopPage from "./pages/top/TopPage";
import NotFoundPage from './pages/notfound/NotFoundPage'

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<TopPage />} />
          <Route path="/custom1" />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
