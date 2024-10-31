import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./helpers/theme.ts";

const customTheme = extendTheme(theme)
createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={customTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>
);
