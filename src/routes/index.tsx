import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
      {
        // path: "tasks",
        index: true,
        element: <Tasks />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "users",
        element: <User />,
      },
    ],
  },
]);

export default router;
