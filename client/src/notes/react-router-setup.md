## react router setup with data mode

npm i react-router

Create a router folder and keep a index.ts:
you can either use Component or element, when element use like `</App>`

```ts
import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
  },
]);

export default router;
```

now in your root code like main.tsx use routerProvider

--if you use themeprovider from shadcn, and redux then keep them, otherwise just use routerProvider and pass the router you have just created.

```ts
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
```

now render other componeents in your rouetr

```ts
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
```

suppose your tasks look like this

```ts
const Tasks = () => {
  return (
    <div>
      <h1>This is Tasks component</h1>
    </div>
  );
};

export default Tasks;
```

then, make sure if you can see the this is tasks compoennt when you go to http://localhost:5173/tasks, but you will not see it now. because we have to use <outlet/> in our app.tsx

```ts
import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      {/* <h1>Basic Todo App</h1> */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
```

another important thing is i fyou want to render the tasks compoent always, when a user comes to your homepage, make sure to keep index: true and also keep it in another `path: tasks`
