import { render } from "react-dom";
import React from "react";
import App from "./app/App";
import "./app/style/index.scss";

const rootElement = document.getElementById("root");

render(<App />, rootElement);
