import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Imberr } from "./screens/Imberr";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Imberr />
  </StrictMode>,
);
