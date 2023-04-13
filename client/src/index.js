import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from "react-redux";
import { store } from "./service/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider >
      <Provider store={store} >
      <App />
      </Provider>
    </ChakraProvider>  
  </React.StrictMode>
);
export const url = `http://localhost:5000`;