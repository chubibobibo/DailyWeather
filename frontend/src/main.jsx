import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const customTheme = {
//   card: {
//     color: "blue",
//   },
//   variants: {
//     "light-blue": {
//       backgroud: "bg-light-blue-100",
//       color: "text-white",
//       shadow: "shadow-light-blue-500/40",
//     },
//   },
//   valid: {
//     variants: ["filled", "gradient"],
//     colors: [
//       "transparent",
//       "white",
//       "blue-gray",
//       "gray",
//       "brown",
//       "deep-orange",
//       "orange",
//       "amber",
//       "yellow",
//       "lime",
//       "light-green",
//       "green",
//       "teal",
//       "cyan",
//       "light-blue",
//       "blue",
//       "indigo",
//       "deep-purple",
//       "purple",
//       "pink",
//       "red",
//     ],
//   },
// };
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider value={customTheme}> */}
    <ToastContainer position='top-center' autoClose={5000} transition:Bounce />
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
