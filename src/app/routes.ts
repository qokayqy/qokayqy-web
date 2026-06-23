import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Landing from "./pages/Landing";
import Process from "./pages/Process";
import TechStack from "./pages/TechStack";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "process", Component: Process },
      { path: "tech-stack", Component: TechStack },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
