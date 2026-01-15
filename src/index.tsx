import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MobileLookFeel } from "./screens/MobileLookFeel";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MobileLookFeel />
  </StrictMode>,
);
